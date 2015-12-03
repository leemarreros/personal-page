'use strict';

import React from 'react';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='profileWrapper'>
        <div className='picWrapper'><img className='profile-pic' src='../img2xOpt/profile-pic.png'/></div>
        <span className='name'><h1>Hi! I am Steve Lee Marreros</h1></span>
        <span className='profession'><h1>FULL STACK ENGINEER</h1></span>
        <span className='javascript'><h1>I ♥ Javascript</h1></span>
      </div>
      );
  }
};


module.exports = Profile;