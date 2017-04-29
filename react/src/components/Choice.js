import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Choice = (props) => {
    return(
      <div>
        <div className='row choice-container'>
          <div className="button small-6 small-centered columns">I want to Learn</div>
        </div>
        <div className='row choice-container'>
          <div className="button small-6 small-centered columns">I want to Teach</div>
        </div>
      </div>
    )
  }

export default Choice;
