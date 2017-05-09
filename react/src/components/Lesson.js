import React from 'react';
import { Link } from 'react-router';

const Lesson = (props) => {
  return(
    <div>
    <hr/>
      <h3>Instrument: {props.instrument}</h3>
      <h3>Difficulty: {props.skillLevel}</h3>
      <h3>Date: {props.date}</h3>
      // want to call handlejoin with the lesson id, and the currentUser id
    </div>
  )
}

export default Lesson;
