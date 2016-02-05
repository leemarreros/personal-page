'use strict';
import React from 'react';


var rootImages = 'http://d2ildvc0jxqpdv.cloudfront.net/';

class Carrousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activated: this.props.activated,
      currentI: 0,
      pictureLoaded: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.activated);
  }

  componentWillMount() {
    if (this.state.activated) {

    }

  }

  _onClick(option) {
    this.setState({pictureLoaded: false});
    switch(option) {
      case 'prev':
        if (this.state.currentI===0) {
          this.setState({currentI: this.props.images.length-1});
          return;
        }
        this.setState({currentI: this.state.currentI -1});
        break;
      case 'next':
        if (this.state.currentI === this.props.images.length-1) {
          this.setState({currentI: 0});
          return;
        }
        this.setState({currentI: this.state.currentI+1});
      default:
    }
  }

  onPictureLoaded(currentI) {
    console.log(currentI);
    this.setState({pictureLoaded: true});
  }

  render() {
    return (
      <div className='wrapperCarrousel'>
        <div className='descriptionApp'>
          <p>{this.props.text}</p>
        </div>
        <div className={this.props.device}>
          <span onClick={this._onClick.bind(this, 'prev')}><div>◀</div></span>
             <img onLoad={this.onPictureLoaded.bind(this, this.state.currentI)} src={rootImages + this.props.images[this.state.currentI]}/>
          <span onClick={this._onClick.bind(this, 'next')}><div>▶</div></span>
        </div>
      </div>
      );
  }
};

var styles = {
  pictureLoaded: {
    opacity: 1
  },
}

module.exports = Carrousel;
