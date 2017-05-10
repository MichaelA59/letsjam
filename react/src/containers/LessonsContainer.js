import React, { Component } from 'react';
import Lesson from '../components/Lesson';

class LessonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [],
      currentUser: {},
      teacher: {},
      student: {}
    }
    this.loadLessonsFromServer = this.loadLessonsFromServer.bind(this)
  }

  loadLessonsFromServer() {
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`, {credentials: 'same-origin'})
    .then(lessonResponse => lessonResponse.json())
    .then(usableLessonData => {
      this.setState({
        lessons: usableLessonData.lessons,
        teacher: usableLessonData.teacher,
        currentUser: usableLessonData.currentUser
      })
    })
  }

  handleSubmit(lesson_id) {
    fetch(`/api/v1/lessons/${lesson_id}`, {
      method: 'PATCH',
      credentials: 'same-origin'}
    )
  }

  componentDidMount() {
    this.loadLessonsFromServer();
  }

  render() {
    let lessons = this.state.lessons.map (lesson => {
      let handleJoin = () => {
        this.handleSubmit(lesson.id)
      }
      return(
        <Lesson
          key={lesson.id}
          id={lesson.id}
          instrument={lesson.instrument}
          skillLevel={lesson.skill_level}
          date={lesson.date}
          studentId={lesson.student_id}
          handleJoin={handleJoin}
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
