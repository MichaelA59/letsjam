import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const User = (props) => {
  return(
    <div className='column column-block'>
      <div className='user-card'>

        <div className='user-card--img-wrapper'>
          <img src={props.photo.url} alt="User Profile Picture" className='user-card--img'/>
        </div>

        <div className='user-card--info'>
          <div className='user-card--info__name'><a href={`/users/${props.id}`}>{props.firstname} {props.lastname}</a></div>
          <div className='user-card--info__instrument'>Guitar Teacher Placeholder</div>
          <div className='user-card--info__experience'>10 Years Placeholder</div>
        </div>
      </div>
    </div>
  )
}

export default User;
