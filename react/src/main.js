import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import App from './App';
import LessonsContainer from './containers/LessonsContainer';

$(function() {
  if(document.getElementById('app')) {
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  }
});

$(function() {
  if(document.getElementById('teacher-lessons')) {
    ReactDOM.render(
      <LessonsContainer />,
      document.getElementById('teacher-lessons')
    );
  }
});
