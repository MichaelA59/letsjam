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
    let url = this.props.instrument + '.png'

    return (
      <div className={'lesson-card lesson-card__' + this.state.vacancy} onClick={handleClick}>

        <div className='lesson-card--img-wrapper'>
          <img className='lesson-card--img' src={assetHelper[url]}/>
        </div>

        <div className='lesson-card--info'>
          <div className='lesson-card--info__instrument'>Instrument: {this.props.instrument}</div>
          <div className='lesson-card--info__difficulty'>Difficulty: {this.props.skillLevel}</div>
          <div className='lesson-card--info__date'>Date: {this.props.date}</div>
          <div className={'lesson-card--info__cta ' + this.props.lessonVacancyClass} onClick={this.props.handleJoin}>{this.props.lessonButtonText}</div>
      </div>
      </div>
    )
  }
}

export default Lesson;
