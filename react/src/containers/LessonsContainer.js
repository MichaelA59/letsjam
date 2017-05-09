import React, { Component } from 'react';
import Lesson from '../components/Lesson';

class LessonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [],
      currentUser: {},
      teacher: {}
    }
    this.loadLessonsFromServer = this.loadLessonsFromServer.bind(this)
  }

  loadLessonsFromServer() {
    let userId = this.props.params.id
    fetch(`/api/v1/users/${userId}`, {credentials: 'same-origin'})
    // we now want to hit the show method of the user api controller. go there next
    .then(lessonResponse => lessonResponse.json())
    .then(usableLessonData => {
      // set ALL of the state attributes appropriately, and pass down as props to the lesson
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

  // <div className='button' onClick={props.handleJoin(props.id)}>Join this Lesson</div>

//   patch request (edit)to lessons controller
//   takes in the lesson_id, current_user and add rthart user to the lesson
//
// look at mikes router challenge



  componentDidMount() {
    this.loadLessonsFromServer();
    //get all of the lesson data, this now includes the teacher of the lesson and the current user. yay!
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
