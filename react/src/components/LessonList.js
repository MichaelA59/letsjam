import React, { Component } from 'react';
import LessonIndex from './LessonIndex';
import { Router, Route, Link, browserHistory } from 'react-router';


class LessonList extends Component {
  constructor(props){
    super(props);
    this.state = {
      lessons: []
    }
    this.loadLessonsFromServer = this.loadLessonsFromServer.bind(this)
  }

  loadLessonsFromServer() {
    fetch('/api/v1/lessons', {credentials: 'same-origin'})
    .then(lessonResponse => lessonResponse.json())
    .then(usableLessonData => {
      this.setState({ lessons: usableLessonData })
    })
  }

  componentDidMount() {
    this.loadLessonsFromServer();
  }

  render() {
    let lessonsIndex = this.state.lessons.map(lesson => {
      return(
        <LessonIndex
          key={lesson.id}
          id={lesson.id}
          instrument={lesson.instrument}
          skill={lesson.skill_level}
          date={lesson.date}
          teacher={lesson.teacher_id}
        />
      )
    })
    return(
      <div>
        <section>
          <div className='container'>
            <h1> All Available Lessons </h1>
            <div className='row small-up-1 medium-up-2 large-up-3'>
              {lessonsIndex}
            </div>
          </div>
        </section>


        <Link to='/'> Home </Link>

      </div>

    )
  }
}

export default LessonList;
