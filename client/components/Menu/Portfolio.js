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

            <div className='fairyt' onClick={this._onClick.bind(this, 'fairyt')}>
              {this.state.fairyt ? <h1> &#9650; </h1> : <h1> &#9660; </h1>}
              <div>
                <a href='https://invis.io/CQ2MAEFJB' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[1] + '.png'}/></a>
              </div>
            </div>
            {this.state.fairyt ? <Carrousel images={imagesFairyt} activated={this.state.fairyt} device={'ipad'}/> : null}

            <div className='prk' onClick={this._onClick.bind(this, 'prk')}>
              {this.state.prk ? <h1> &#9650; </h1> : <h1> &#9660; </h1>}
              <div><a href='https://github.com/steveleec/splendid-simi' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a></div>
            </div>
            {this.state.prk ? <Carrousel images={imagesPrk} activated={this.state.prk} device={'phone'}/> : null}

            <div className='slck' onClick={this._onClick.bind(this, 'slck')}>
              {this.state.slck ? <h1> &#9650; </h1> : <h1> &#9660; </h1>}
              <div>
                <a href='https://amber-inferno-3412.firebaseapp.com/#/splash' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[2] + '.png'}/></a>
                <a href='https://github.com/BeamingBaldwin/BeamingBaldwin' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a>
              </div>
            </div>
            {this.state.slck ? <Carrousel images={imagesSlck} activated={this.state.slck} device={'desktop'}/> : null}

            <div className='mystery' onClick={this._onClick.bind(this, 'mystery')}>
              {this.state.mystery ? <h1> &#9650; </h1> : <h1> &#9660; </h1>}
              <div><a href='https://github.com/steveleec/mystery-meal' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a></div>
            </div>
            {this.state.mystery ? <Carrousel images={imagesMystery} activated={this.state.mystery} device={'phone'}/> : null}

            <div className='shapp' onClick={this._onClick.bind(this, 'shapp')}>
              {this.state.shapp ? <h1> &#9650; </h1> : <h1> &#9660; </h1>}
              <div>
                <a href='https://invis.io/4E578D9FZ' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[1] + '.png'}/></a>
                <a href='https://github.com/steveleec/shapp' target="_blank" onClick={()=>{smallIconClicked= true;}}><img src={imagesRoot + smallIconBar[0] + '.png'}/></a>
              </div>
            </div>
            {this.state.shapp ? <Carrousel images={imagesShapp} activated={this.state.shapp} device={'phone'}/> : null}
        </div>
      </div>
      );
  }
};

module.exports = Portfolio;

