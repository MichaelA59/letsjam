// App (This component) will be responsible for rendering 2 things
// First: The container (UserIndexContainer)


import React, { Component } from 'react';
import Choice from './components/Choice'
import Header from './components/Header'
import UserIndexContainer from './containers/UserIndexContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: null
    }
    this.handleChangeUserTypeStudent = this.handleChangeUserTypeStudent.bind(this)
    this.handleChangeUserTypeTeacher = this.handleChangeUserTypeTeacher.bind(this)
  }

  // put state here
  // create function that is passed to Choice as props
  // when button is clicked, function triggered to update userType
  // pass updated userType to StudentIndexContainer as props

  handleChangeUserTypeStudent() {
    this.setState({ userType: true})
  }

  handleChangeUserTypeTeacher() {
    this.setState({ userType: false})
  }


  render() {

    let onButtonClick = () => {
      this.handleChangeUserType()
    }

  // if this.state.userType = null
  //   mainPage = ""
  // elsif this.state.userType = "student"
  //   mainPage = <StudentContainer ... >
  // elsif this.state.userType = "teacher"
  //   mainPage = <TeacherContainer >

  return (
    <div>
      <section className='test'>
        <div className='parallax'>
          <div className='filler-content'>
            <div id='question'> What is your Goal? </div>
            <Choice
              onButtonClickStudent={this.handleChangeUserTypeStudent}
              onButtonClickTeacher={this.handleChangeUserTypeTeacher}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className='columns small-12 med-4'>
              <UserIndexContainer
                userType={this.state.userType}
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
}

export default App;
