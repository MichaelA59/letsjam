import React, { Component } from 'react';
import Lesson from '../components/Lesson';

class LessonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: []
    }
    this.loadLessonsFromServer = this.loadLessonsFromServer.bind(this)
  }

  loadLessonsFromServer() {
    fetch('/api/v1/lessons')
    .then(lessonResponse => lessonResponse.json())
    .then(usableLessonData => {
      this.setState({ lessons: usableLessonData})
    })
  }

  componentDidMount() {
    this.loadLessonsFromServer();
  }

  render() {
    let lessons = this.state.lessons.map (lesson => {
      debugger;
      return(
        <Lesson
          key={lesson.id}
          id={lesson.id}
          instrument={lesson.instrument}
          skillLevel={lesson.skill_level}
          date={lesson.date}
          />
      )
    })

    return(
      <div>
        <h3> My Lessons </h3>
        {lessons}
      </div>
    )
  }
}

export default LessonsContainer;
