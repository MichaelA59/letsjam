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

        <section className='test'>
          <div className='parallax-small parallax-small__lessons-page'>
            <div className="parallax-small--title"> All Available Lessons </div>
          </div>
        </section>

        <div className='bumper-25'></div>
        <div className='bumper-25'></div>

        <section>
          <div className='container'>
            <div className='row small-up-1 medium-up-2 large-up-3'>
              {lessonsIndex}
            </div>
          </div>
        </section>

        <section>
          <div className='row'>
            <div className='columns small-12 small-centered text-center'>
              <Link to='/' className='button'> Home </Link>
            </div>
          </div>
        </section>

        <div className='bumper-100'></div>
      </div>

    )
  }
}

export default LessonList;
