import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Users from './Users';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Users}>
        
        </Route>
      </Router>
    )
  }
}

export default App;
