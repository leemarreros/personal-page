'use strict';

import React from 'react';
import Home from './Menu/Home';
import Portfolio from './Menu/Portfolio';
import Blog from './Menu/Blog';
import Resources from './Menu/Resources';

var selectedButtons = [true,false,false,false];
var menuOpened = false;

class MenuPanel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      portfolio:false,
      blog: false,
      resources: false,
      current: 'home',
      // buttonsArray: ['home','portfolio','blog','resources'],
      buttonsArray: ['home','portfolio','resources'],
      windowWidth: window.innerWidth,
      defaultDropMenu: 'home',
      menuOpened: false
    };
  }

  handleClick(onSpot) {
    for(let button of this.state.buttonsArray) {
      this.setState({[button]: false});
    }
    this.setState({[onSpot]: true});
    selectedButtons = [false,false,false,false];
    selectedButtons[this.state.buttonsArray.indexOf(onSpot)] = true;

    this.setState({defaultDropMenu: onSpot.toUpperCase()});
  }

  handleResize(e) {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillMount(){
    this.setState({menuOpened});
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  dropMenuHandler() {
    menuOpened = !menuOpened;
    this.setState({menuOpened});
  }

  render() {
    return (
      <div className='wrapperMenu'>
        <div className='line'><hr/></div>
        <div className='buttonsWrapper'>
          { this.state.windowWidth > 500 ?
              this.state.buttonsArray.map(function(button, i) {
                return <span key={i} onClick={this.handleClick.bind(this, button)} style={ selectedButtons[i] ? styles.buttonSelectedNor : {'borderBottomWidth': 0, 'color': '#000'} }>
                          <h1 style={ selectedButtons[i] ? {'fontWeight':'bold'} :null }>{button.toUpperCase()}</h1>
                       </span>
              }, this) :
              <div className='dropMenuWrapper' onClick={this.dropMenuHandler.bind(this)}>
                {this.state.menuOpened ? null : <span><h1 style= {styles.currentButton}>{ this.state.defaultDropMenu.toUpperCase() } &nbsp; &#9660;</h1></span>}
                {this.state.menuOpened ? this.state.buttonsArray.map((button, i)=>{
                            return <span key={i} onClick={this.handleClick.bind(this, button)}>
                                    <h1 style={ selectedButtons[i] ? styles.buttonSelectedMin :null }> {button.toUpperCase()} </h1>
                                   </span>
                        }, this): null}
              </div>
          }
        </div>
        <div className='line'><hr/></div>
        {this.state.blog && <Blog />}
        {this.state.home && <Home />}
        {this.state.portfolio && <Portfolio />}
        {this.state.resources && <Resources />}
      </div>
      );
  }
};

module.exports = MenuPanel;

var styles = {
  buttonSelectedNor: {
    'borderBottomWidth': 3,
    'borderBottomColor': '#353C5F',
    'color': '#353C5F'
  },
  currentButton: {
    'fontWeight':'bold',
    'margin':0,
    'padding': 10
  },
  buttonSelectedMin: {
    'fontWeight':'bold',
    'color': '#fff',
    'backgroundColor': '#353C5F',
    'margin':0,
    'padding': 10
  }
}