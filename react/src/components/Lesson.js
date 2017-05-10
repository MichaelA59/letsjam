import React from 'react';
import { Link } from 'react-router';

const Lesson = (props) => {
  return(
    <div>
    <hr/>
      <h3>Instrument: {props.instrument}</h3>
      <h3>Difficulty: {props.skillLevel}</h3>
      <h3>Date: {props.date}</h3>
      <h3>Student: {props.student_id}</h3>
      <button className='button' onClick={props.handleJoin}>Join this Lesson</button>
    </div>
  )
}

export default Lesson;
