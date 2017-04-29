import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Choice from './components/Choice';

$(function() {
  if(document.getElementById('app')) {
    ReactDOM.render(
      <Header />,
      document.getElementById('app')
    );
  }
});

$(function() {
    if (document.getElementById('homeChoice')) {
    ReactDOM.render(
      <Choice />,
      document.getElementById('homeChoice')
    );
  }
});
