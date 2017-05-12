import React, { Component } from 'react';
import Choice from './components/Choice';
import Header from './components/Header';
import User from './components/User';
import { Router, Route, Link, browserHistory } from 'react-router';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.displayListOfUsers = this.displayListOfUsers.bind(this);
  }

  displayListOfUsers() {
    fetch('api/v1/teachers')
      .then(response => response.json())
      .then(useableUserData => {
        this.setState({ users: useableUserData })
      })
    }

    componentDidMount() {
      this.displayListOfUsers();
    }

  render() {
    let users = this.state.users.map(user => {
      return(
        <User
          key={user.id}
          id={user.id}
          photo={user.profile_photo}
          email={user.email}
          firstname={user.first_name}
          lastname={user.last_name}
        />
      )
    })

    return (
      <div>
        <section className='test'>
          <div className='parallax'>
            <div className='filler-content'>
              <div id='question'> Music Lessons for the Digital Age </div>
              <div id='question-sub'> Connect online with Teachers & Students </div>
              <Choice />
            </div>
          </div>
        </section>

        <section>
          <div className="container">

            <div className='bumper-25'/>
            <div className='bumper-25'/>

            <div className='row'>
              <div className='columns small-6'>
                <h1 id='users-list'> Top Teachers </h1>
              </div>

              <div className='columns small-6 text-right'>
                <Link to="/lessons" className='view-all-lessons'> View All Lessons </Link>
              </div>
            </div>

            <div className='bumper-25'/>

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

        <div className='bumper-100'/>

      </div>
    )
  }
}

export default Users;
