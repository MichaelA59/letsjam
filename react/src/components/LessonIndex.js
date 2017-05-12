import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class LessonIndex extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {

    let url = this.props.instrument + '.png'

    return(
      <div className='column column-block text-center'>
        <div className='lesson-card'>

          <div className='lesson-card--img-wrapper'>
          <img src={assetHelper[url]} className='lesson-card--img'/>
          </div>

          <div className='lesson-card--info'>
            <div className='lesson-card--info__instrumment'>Instrument: {this.props.instrument}</div>
            <div className='lesson-card--info__difficulty'>Difficulty: {this.props.skill}</div>
            <div className='lesson-card--info__date'>Date: {this.props.date}</div>
            <a href={`/users/${this.props.teacher}`} className='lesson-card--info__cta'> Check it Out! </a>
          </div>
        </div>
      </div>
    )
  }
}

export default LessonIndex;
