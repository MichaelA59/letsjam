import React, { Component } from 'react';
import User from '../components/User';

class UserIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.displayListOfUsers = this.displayListOfUsers.bind(this);
  }

  displayListOfUsers() {
    fetch('api/v1/users')
    .then(response => response.json())
    .then(useableUserData => {
      this.setState({ users : useableUserData })
    })
  }

  componentDidMount() {
    this.displayListOfUsers();

  }

  // 1. Clicking button needs to update state of the "userType" (on which component?)
  // 2. This updated state needs to be passed into StudentIndexContainer
  // 3. Filter the userList based on the "userType"
  // 4. Map the filtered list into User components

  render() {

    let userType = this.props.userType

    let filteredUsers = this.state.users.filter(function(user) {
      return user.is_student == userType
    })

    let users = filteredUsers.map (user => {

      return(
        <User
          key={user.id}
          id={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          username={user.username}
          zip={user.zip}
          mobile={user.mobile}
          about_me={user.about_me}
          userType={userType}
        />
      )
    })

    return(
      <div id='users-list'>
        {users}
      </div>
    )
  }
}


export default UserIndexContainer;
