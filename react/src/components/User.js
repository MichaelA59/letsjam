import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const User = (props) => {
  return(
    <div className='homepage-user-index column column-block'>
      <h1>
        <a href={`/users/${props.id}`}>{props.username}</a>
      </h1>
      <img src={props.photo.url} alt="User Profile Picture" width="300px" height="auto"/>
      <p>{props.first_name} {props.last_name}</p>
      <p><strong>{props.email}</strong></p>
    </div>
  )
}

export default User;
