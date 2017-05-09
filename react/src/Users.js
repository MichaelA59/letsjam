import React, { Component } from 'react';
import Choice from './components/Choice';
import Header from './components/Header';
import UserIndexContainer from '../containers/UserIndexContainer';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: null
    }
    this.handleChangeUserTypeStudent = this.handleChangeUserTypeStudent.bind(this)
    this.handleChangeUserTypeTeacher = this.handleChangeUserTypeTeacher.bind(this)
  }

  handleChangeUserTypeStudent() {
    this.setState({ userType: true})
  }

  handleChangeUserTypeTeacher() {
    this.setState({ userType: false})
  }

  render() {
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
              <UserIndexContainer
                userType={this.state.userType}
               />
          </div>
        </section>
      </div>
    )
  }
}

export default Users;
