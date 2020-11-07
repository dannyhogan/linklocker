import React from 'react';
import Loader from 'react-loader-spinner'
import './Loading.scss'

const Loading = ({ type = 'ThreeDots', color = '#333333' }) => {
  return (
    <div className="Loading">
      <Loader
        type='ThreeDots'
        color={color}
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default Loading;
