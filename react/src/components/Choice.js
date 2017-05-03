import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Choice = (props) => {
    return(
      <div>
        <div className='row choice-container'>
          <div className="button small-6 small-centered columns" onClick={props.onButtonClickStudent}>
            <a href='#users-list'>I want to Learn</a>
          </div>
        </div>
        <div className='row choice-container'>
          <div className= "button small-6 small-centered columns" onClick={props.onButtonClickTeacher}>
            <a href='#users-list'>I want to Teach</a>
          </div>
        </div>
      </div>
    )
  }

export default Choice;


<a href="http://server/page.html#anchor-name">Link text</a>
