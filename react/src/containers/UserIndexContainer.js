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

  render() {

    let userType = this.props.userType

    let filteredUsers = this.state.users.filter(function(user) {
      return user.is_student !== userType
    })

    let users = filteredUsers.map (user => {
      return(
        <User
          key={user.id}
          id={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          photo={user.profile_photo}
          email={user.email}
          username={user.username}
          zip={user.zip}
          mobile={user.mobile}
          about_me={user.about_me}
          userType={userType}
        />
      )
    })

    let userListHeader = ''

    if (userType == true) {
      userListHeader = 'Available Students'
    }
    else {
      userListHeader = 'Available Teachers'
    }

    return(
      <div>
        <div>
          <h1 id='users-list'>{userListHeader}</h1>
        </div>
        <div className='row small-up-1 medium-up-2 large-up-3'>
          {users}
        </div>
      </div>
    )
  }
}

export default UserIndexContainer;
