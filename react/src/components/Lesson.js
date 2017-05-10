import React, { Component } from 'react';
import { Link } from 'react-router';

class Lesson extends Component {
  contstructor(props){
    super(props);
    this.state = {
      vacancy: 'available';
    }
    this.handleChangeClassName = this.handleChangeClassName.bind(this)
  }
  handleChangeClassName() {
    this.setState({ vacancy: 'unavailable'})
  }

  render() {
    debugger;
    let handleClick = () => {
      this.handleChangeClassName();
    }
    return (
      <div className={this.state.vacancy} onClick={handleClick}>
      <hr/>
        <h3>Instrument: {this.props.instrument}</h3>
        <h3>Difficulty: {this.props.skillLevel}</h3>
        <h3>Date: {this.props.date}</h3>
        <button className='button' onClick={this.props.handleJoin}>Join this Lesson</button>
      </div>
    )
  }
}

export default Lesson;


// const Lesson = (props) => {
//   return(
//     <div className={props.vacancy}>
//     <hr/>
//       <h3>Instrument: {props.instrument}</h3>
//       <h3>Difficulty: {props.skillLevel}</h3>
//       <h3>Date: {props.date}</h3>
//       <button className='button' onClick={props.handleJoin}>Join this Lesson</button>
//     </div>
//   )
// }
//
// export default Lesson;
