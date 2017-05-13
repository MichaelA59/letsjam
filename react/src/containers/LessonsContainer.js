import React, { Component } from 'react';
import Lesson from '../components/Lesson';

class LessonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      lessons: [],
      teacher: {},
      student: {},
    }
    this.loadLessonsFromServer = this.loadLessonsFromServer.bind(this)
  }

  loadLessonsFromServer() {
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`, {credentials: 'same-origin'})
    .then(lessonResponse => lessonResponse.json())
    .then(usableLessonData => {
      this.setState({
        currentUser: usableLessonData.currentUser,
        lessons: usableLessonData.lessons,
        teacher: usableLessonData.teacher,
        student: usableLessonData.student
      })
    })
  }

  handleSubmit(lesson_id, student_id) {
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
        this.handleSubmit(lesson.id, lesson.student_id)
      }

      let lessonButtonText;
      let lessonVacancyClass = '';

      if (lesson.student_id) {
        lessonButtonText = 'Booked'
        lessonVacancyClass = 'unavailable'
      } else {
        lessonButtonText = 'Book This Lesson'
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
          lessonButtonText={lessonButtonText}
          lessonVacancyClass={lessonVacancyClass}
          />
      )
    })

    return(
      <div>
        {lessons}
      </div>
    )
  }
}

export default LessonsContainer;
