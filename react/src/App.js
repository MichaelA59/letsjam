import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Users from './Users';
import LessonsContainer from './containers/LessonsContainer';
import LessonList from './components/LessonList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Users} />
        <Route path='/users/:id' component={LessonsContainer} />
        <Route path='/lessons' component={LessonList} />
      </Router>
    )
  }
}

export default App;
