import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const User = (props) => {
  return(
    <div className='columns small-12 med-4 text-center'>
      <h1>
        {props.username}
      </h1>
      {props.first_name}
      {props.last_name}
      {props.email}
      {props.zip}
      {props.mobile}
      <hr width='50%'/>
    </div>
  )
}

export default User;
