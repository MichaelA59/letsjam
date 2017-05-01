import React, { Component } from 'react';
import Student from '../components/Student'

class StudentIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
    this.displayListOfStudents = this.displayListOfStudents.bind(this);
  }

  displayListOfStudents() {
    fetch('api/v1/students')
    .then(response => {
      return response.json()
    })
    .then(useableStudentData => {
      this.setState({ students : useableStudentData })
    })
  }

  componentDidMount() {
    this.displayListOfStudents();
  }

  render() {
    let students = this.state.students.map (student => {
      debugger;
      return(
        <Student
          key={student.id}
          id={student.id}
          first_name={student.first_name}
          last_name={student.last_name}
          email={student.email}
          username={student.username}
          zip={student.zip}
          mobile={student.mobile}
        />
      )
    })

    return(
      <div className='row'>
        <div className='columns small-12 large 3 text-center'>
          {students}
        </div>
      </div>
    )
  }
}


export default StudentIndexContainer;
