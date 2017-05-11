import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class LessonIndex extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className='column column-block lessons-from-lessons-index-page text-center'>
        <h3>Instrument: {this.props.instrument}</h3>
        <h3>Difficulty: {this.props.skill}</h3>
        <h3>Date: {this.props.date}</h3>
        <a href={`/users/${this.props.teacher}`}> Check it Out! </a>
      </div>
    )
  }
}

export default LessonIndex;
