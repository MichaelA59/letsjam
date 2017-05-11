import React, { Component } from 'react';
import { Link } from 'react-router';

class Lesson extends Component {
  constructor(props){
    super(props);
    this.state = {
      vacancy: 'available'
    }
    this.handleChangeClassName = this.handleChangeClassName.bind(this)
  }
  handleChangeClassName() {
    this.setState({ vacancy: 'unavailable'})
  }

  componentDidMount() {
    if (this.props.studentId) {
      this.setState({ vacancy: 'unavailable' })
    }
  }

  render() {
    let handleClick = () => {
      this.handleChangeClassName();
    }
    return (
      <div className={this.state.vacancy} onClick={handleClick}>
        <h3>Instrument: {this.props.instrument}</h3>
        <h3>Difficulty: {this.props.skillLevel}</h3>
        <h3>Date: {this.props.date}</h3>
        <button className='button' onClick={this.props.handleJoin}>Join this Lesson</button>
      </div>
    )
  }
}

export default Lesson;
