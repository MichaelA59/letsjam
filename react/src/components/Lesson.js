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
      <div className={'lesson-card lesson-card__' + this.state.vacancy} onClick={handleClick}>

        <div className='lesson-card--img-wrapper'>
          <img src='https://unsplash.it/400?random'/>
        </div>

        <div className='lesson-card--info'>
          <div className='lesson-card--info__instrument'>Instrument: {this.props.instrument}</div>
          <div className='lesson-card--info__difficulty'>Difficulty: {this.props.skillLevel}</div>
          <div className='lesson-card--info__date'>Date: {this.props.date}</div>
          <button className='lesson-card--info__cta' onClick={this.props.handleJoin}>Join this Lesson</button>
      </div>
      </div>
    )
  }
}

export default Lesson;
