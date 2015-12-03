'use strict';
import React from 'react';


var rootImages = '../../img2xOpt/'

class Carrousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activated: this.props.activated,
      currentI: 0,
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

  render() {
    console.log(this.state.activated);
    return (
      <div className='wrapperCarrousel'>
        <div className={this.props.device}>
          <span onClick={this._onClick.bind(this, 'prev')}><div>◀</div></span>
            <img src={rootImages + this.props.images[this.state.currentI]}/>
          <span onClick={this._onClick.bind(this, 'next')}><div>▶</div></span>
        </div>
      </div>
      );
  }
};


module.exports = Carrousel;
