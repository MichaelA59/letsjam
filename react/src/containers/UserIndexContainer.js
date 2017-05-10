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
    let userType = this.props.userType;
    let whichUser;

    if (userType) {
      whichUser = 'teachers'
    } else {
      whichUser = 'students'
    }

    fetch(`api/v1/${whichUser}`)
      .then(response => response.json())
      .then(useableUserData => {
        this.setState({ users : useableUserData })
      })
      debugger;
    }

  componentDidMount() {
    this.displayListOfUsers();
  }

  render() {
    let users = this.state.users.map (user => {
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
        />
      )
    })

    let userListHeader = ''
    if (this.props.userType) {
      userListHeader = 'Available Teachers'
    }
    else {
      userListHeader = 'Available Students'
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
