import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

$(function() {
  ReactDOM.render(
    <Layout />,
    document.getElementById('app')
  );
});
