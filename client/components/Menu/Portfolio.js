'use strict';

import React from 'react';
import Carrousel from './Carrousel'

var imgNamesBar = ['fairyt-bar', 'prk-bar','slck-bar', 'mystery-bar', 'shapp-bar'];
var smallIconBar = ['github-link-bar', 'invision-link-bar', 'linkIcon-link-bar'];
var smallIconClicked = false;

var imagesRoot = '../../img2xOpt/';
var imagesFairyt = ['angus-screen-1.png', 'angus-screen-2.png', 'angus-screen-3.png'];
var imagesPrk = ['prk-screen-1.png', 'prk-screen-2.png','prk-screen-3.png'];
var imagesSlck = ['slack-screen-1.png', 'slack-screen-2.png', 'slack-screen-3.png', 'slack-screen-4.png']
var imagesMystery = ['mystery-screen-1.png', 'mystery-screen-2.png', 'mystery-screen-3.png', 'mystery-screen-4.png', 'mystery-screen-5.png', 'mystery-screen-6.png', 'mystery-screen-7.png', 'mystery-screen-8.png']
var imagesShapp = ['shapp-screen-1.png', 'shapp-screen-2.png', 'shapp-screen-3.png', 'shapp-screen-4.png', 'shapp-screen-5.png', 'shapp-screen-6.png'];
var imagesPoll = ['pollSystem-screen-0.png', 'pollSystem-screen-1.png', 'pollSystem-screen-2.png', 'pollSystem-screen-3.png'];
var contentApp = ['Navigation of interactive book for children (user Experience project).',
                  'Native iOS mobile app that helps drivers to find a parking spot available in Santa Monica.',
                  'Chat application that allows people to create separate threads for different topic discussions.',
                  'Native iOS mobile app developed under the concept of “Tinder for food.”',
                  'Native iOS Etsy-like marketplace app. It connects local artists and customers.',
                  'Desktop voting app for presidential elections with live poll feature.'];
class Portfolio extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      smallIconClicked: false,
      fairyt: false,
      prk: false,
      slck: false,
      mystery: false,
      shapp: false,
      poll:false,
    };
  }

  _onClick(bar) {
    if (!(smallIconClicked)) event.preventDefault();
    smallIconClicked = false;
    this.setState({[bar] : !this.state[bar]});
  }

  render() {
    return (
      <div className='wrapperPortfolio'>
        <div className='wrapperBar'>

            <div className='mystery' style={{'cursor': 'pointer'}}>
              {this.state.mystery ? <h1>   </h1> : <h1>   </h1>}
              <div><a href='https://github.com/steveleec/mystery-meal' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a></div>
            </div>
            <Carrousel text={contentApp[3]} images={imagesMystery} activated={this.state.mystery} device={'phone'}/>

             <div className='poll' style={{'cursor': 'pointer'}}>
              {this.state.poll ? <h1>   </h1> : <h1>   </h1>}
              <div>
                <a href='https://github.com/steveleec/livePoll.git' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a>
              </div>
            </div>
            <Carrousel text={contentApp[5]} images={imagesPoll} activated={this.state.poll} device={'desktop'}/>


            <div className='shapp' style={{'cursor': 'pointer'}}>
              {this.state.shapp ? <h1>   </h1> : <h1>   </h1>}
              <div>
                <a href='https://invis.io/4E578D9FZ' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[1] + '.png'}/></a>
                <a href='https://github.com/steveleec/shapp' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a>
              </div>
            </div>
            <Carrousel text={contentApp[4]} images={imagesShapp} activated={this.state.shapp} device={'phone'}/>

            <div className='prk' style={{'cursor': 'pointer'}}>
              {this.state.prk ? <h1>   </h1> : <h1>   </h1>}
              <div><a href='https://github.com/steveleec/splendid-simi' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a></div>
            </div>
            <Carrousel text={contentApp[1]} images={imagesPrk} activated={this.state.prk} device={'phone'}/>

            <div className='slck' style={{'cursor': 'pointer'}}>
              {this.state.slck ? <h1>   </h1> : <h1>   </h1>}
              <div>
                <a href='https://amber-inferno-3412.firebaseapp.com/#/splash' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[2] + '.png'}/></a>
                <a href='https://github.com/BeamingBaldwin/BeamingBaldwin' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a>
              </div>
            </div>
            <Carrousel text={contentApp[2]} images={imagesSlck} activated={this.state.slck} device={'desktop'}/>

            <div className='fairyt' style={{'cursor': 'pointer'}}>
              {this.state.fairyt ? <h1>   </h1> : <h1>   </h1>}
              <div>
                <a href='https://invis.io/CQ2MAEFJB' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[1] + '.png'}/></a>
              </div>
            </div>
            <Carrousel text={contentApp[0]} images={imagesFairyt} activated={this.state.fairyt} device={'ipad'}/>
        </div>
      </div>
      );
  }
};

module.exports = Portfolio;

