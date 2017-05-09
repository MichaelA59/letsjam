import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Users from './Users';
import LessonsContainer from './containers/LessonsContainer';

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
      </Router>
    )
  }
}

export default App;
