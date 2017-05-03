import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import App from './App'
// import Header from './components/Header';
// import Choice from './components/Choice';
// import UserIndexContainer from './containers/UserIndexContainer';

$(function() {
  if(document.getElementById('app')) {
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }
});

// $(function() {
//     if (document.getElementById('homeChoice')) {
//     ReactDOM.render(
//       <Choice />,
//       document.getElementById('homeChoice')
//     );
//   }
// });
//
// $(function() {
//   ReactDOM.render(
//     <StudentIndexContainer />,
//     document.getElementById('students-index')
//   );
// });


// render(< ProfileShow/>, document.getElementById('ProfileShow'))
