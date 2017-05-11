import React, { Component } from 'react';
import Choice from './components/Choice';
import Header from './components/Header';
import User from './components/User';
import { Router, Route, Link, browserHistory } from 'react-router';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: null,
      users: []
    }
    this.handleChangeUserTypeStudent = this.handleChangeUserTypeStudent.bind(this)
    this.handleChangeUserTypeTeacher = this.handleChangeUserTypeTeacher.bind(this)
    this.displayListOfUsers = this.displayListOfUsers.bind(this);
  }

  handleChangeUserTypeStudent() {
    this.setState({ userType: true})
    this.displayListOfUsers()
  }

  handleChangeUserTypeTeacher() {
    this.setState({ userType: false})
    this.displayListOfUsers()
  }

  displayListOfUsers() {
    let whichUser;
    if (this.state.userType) {
      whichUser = 'teachers'
      // Because we want to see Teachers if we want to LEARN
      // So it needs to be reversed
    } else {
      whichUser = 'students'
    }

    fetch(`api/v1/${whichUser}`)
      .then(response => response.json())
      .then(useableUserData => {
        this.setState({ users: useableUserData })
      })
    }

  render() {
    let users = this.state.users.map(user => {
      return(
        <User
          key={user.id}
          id={user.id}
          photo={user.profile_photo}
          email={user.email}
          username={user.username}
        />
      )
    })

    let userListHeader = '';
    if (this.state.userType) {
      userListHeader = 'Available Teachers'
    } else {
      userListHeader = 'Available Students'
    }

      return (
        <div>
          <section className='test'>
            <div className='parallax'>
              <div className='filler-content'>
                <div id='question'> Connecting Teachers & Talent </div>
                <Choice
                  onButtonClickStudent={this.handleChangeUserTypeStudent}
                  onButtonClickTeacher={this.handleChangeUserTypeTeacher}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <h1 id='users-list'> {userListHeader} </h1>
              <h3 className='text-center'><Link to="/lessons"> View All Lessons </Link></h3>
              <div className='row small-up-1 medium-up-2 large-up-3'>
                {users}
              </div>
            </div>
          </section>

          <section>
            <div className='row'>
              <div className='columns small-12 small-centered text-center'>
                <a href='#top-bar' className='button'>Back to Top</a>
              </div>
            </div>
          </section>
        </div>
      )
  }
}

export default Users;
