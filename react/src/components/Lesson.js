import React from 'react';
import { Link } from 'react-router';

const Lesson = (props) => {
  return(
    <div>
    <hr/>
      <h3>Instrument: {props.instrument}</h3>
      <h3>Difficulty: {props.skillLevel}</h3>
      <h3>Date: {props.date}</h3>
      <div className='button'>Join this Lesson</div>
    </div>
  )
}

export default Lesson;
