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

  // loadLessonsFromServer() {
  //   // let currentPageUser = location.pathname;
  //   // fetch("/api/v1" + currentPageUser + ".json")
  //   fetch("api/v1/users/14")
  //   // we now want to hit the show method of the user api controller. go there next
  //   .then(lessonResponse => lessonResponse.json())
  //   .then(usableLessonData => {
  //     // set ALL of the state attributes appropriately, and pass down as props to the lesson
  //     this.setState({
  //       lessons: usableLessonData.lessons,
  //       teacher: usableLessonData.teacher,
  //       currentUser: usableLessonData.user
  //     })
  //   })
  // }

  // handleSubmit(event, lesson_id, currentUser_id) {
  //   // we need three arguments. Event, lesson_id, currentUser id
  //   event.preventDefault()
  //   let requestBody = {
  //     lesson_id: lesson_id,
  //     user_id: currentUser_id
  //   }
  //   fetch('/api/v1/tutorships', { method: 'POST', body: JSON.stringify(requestBody) })
  //   //  want to make sure we specify the method is create, and the body is requestBody
  //   .then(response => {
  //     let parsed = response.json()
  //     return parsed
  //   }).then(message => {
  //     debugger;
  //   })
  // }

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
      return(
        <Lesson
          key={lesson.id}
          id={lesson.id}
          instrument={lesson.instrument}
          skillLevel={lesson.skill_level}
          date={lesson.date}
          // handleJoin={this.handleSubmit}
          // teacher={this.state.teacher}

          //put some props here
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
