'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import MenuPanel from './components/MenuPanel';
import Footer from './components/Footer';

class PersonalPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='globalWrapper'>
        <div className="header"></div>
        <Profile />
        <MenuPanel />
        <Footer />
      </div>
      );
  }
};


ReactDOM.render(<PersonalPage/>, document.getElementById('react'));
