import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Choice = (props) => {
    return(
      <div>
        <div className='row choice-container'>
          <div className="small-12 medium-6 small-centered columns text-right">
            <a href='/users/sign_up' className='button'>I'm a Teacher</a>
          </div>
          <div className= "small-12 medium-6 small-centered columns text-left">
            <a href='/users/sign_up' className='button'>I'm a Student</a>
          </div>
        </div>
      </div>

    )
  }

export default Choice;
