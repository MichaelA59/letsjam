import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h1 className='video-header'>Join the Band</h1>
    )
  }
}



export default Layout;
