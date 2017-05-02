import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Student = (props) => {
  return(
    <div>
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

export default Student;
