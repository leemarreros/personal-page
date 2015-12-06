'use strict';

import React from 'react';
var imagesFooter = [['linkedin-icon-f', false], ['twitter-icon-f', false], ['github-icon-f', false],['Behance-icon-f', false], ['email-icon-f', false]];
var imagesFooterT = ['linkedin-icon-f-t', 'twitter-icon-f-t', 'github-icon-f-t', 'Behance-icon-f-t', 'email-icon-f-t'];
var links = ['https://www.linkedin.com/in/steveleem', 'https://twitter.com/steveleec', 'https://github.com/steveleec', 'https://www.behance.net/steveleem', 'mailto:lee.marreros@pucp.pe?Subject=I%20am%20wondering%20if%20...?'];
class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: false,
    };
  }

  _onClick (i) {
    switch(i) {
      case 4:
        this.setState({email: true});
        break;
      default:
        this.setState({email: false});
    }
  }

  render() {
    return (
      <div className='wrapperFooter'>
        <div className='imageWrapperFooter' >
          {imagesFooter.map((imgName,i) => {
            return <a href={links[i]} key={i} target={this.state.email ? "_top" : "_blank"} onClick={this._onClick.bind(this, i)}>
                      <img src={'../img2xOpt/' + imgName[0] + '.png'}/>
                   </a>
          }, this)}
        </div>
        <span><h1>COPYRIGHT © 2015 - STEVE MARREROS : ALL RIGHTS RESERVED</h1></span>
      </div>
      );
  }
};


module.exports = Footer;
