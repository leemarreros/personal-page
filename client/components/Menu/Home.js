'use strict';

import React from 'react';
var imagesStr = ['js-icon', 'react-icon', 'mongodb-icon', 'grunt-icon', 'framerjs-icon', 'nodejs-icon', 'gihub-icon', 'sketch-icon', 'selenium-icon'];
var imagesEx = ['firebase-icon', 'angular-icon', 'java-icon', 'python-icon', 'jasmine-icon', 'backbone-icon'];

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='wrapperHome'>
        <span><h1>BIO</h1></span>
        <span><h1>&emsp; I used to teach Finance in my educational startup AFINES back then in my country, Peru. I became a Software Engineer in the Bay Area. I want to take a piece of SV’s culture and spread it around my country. #makersquaregrad </h1></span>
        <span><h1>TECHNICAL EXPERTISE</h1></span>
        <span><h1>&emsp; STRONG</h1></span>
        <span><h1>Javascript (ES5, ES6), React/Flux, React-native, Flexbox, MongoDB, Promises, Grunt, Gulp, Web Perfomance O., Framer, Sketch, NodeJS, Github, Selenium.</h1></span>
        <div className='imgWrapper'> {imagesStr.map((icon, i) => {
          return <img key={i} className='icons' src={'../../img2xOpt/' + icon + '.png'}/>
        })}
        </div>
        <span><h1>&emsp; EXPERIENCED</h1></span>
        <span><h1>Angular.JS, Backbone, Heroku, Firebase, Async programming, Java, Python, Jasmine, JUnit, Socket.io, CoffeeScript.</h1></span>
        <div className='imgWrapper'> {imagesEx.map((icon, i) => {
          return <img key={i} className='icons' src={'../../img2xOpt/' + icon + '.png'}/>
        })}
        </div>
      </div>
      );
  }
};

module.exports = Home;