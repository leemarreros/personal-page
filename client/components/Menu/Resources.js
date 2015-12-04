'use strict';

import React from 'react';
import resources from '../../resources'

class Resources extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='wrapperResources'>
        {resources.map((resource, i)=>{
          return (
            <div className="eachSource" key={i}>
              <div><h1>{resource.name}</h1></div>
              <div className='wrapperLinks'>
                {resource.sources.map((link, i)=>{
                  return (
                    <span key={i}>
                      <a href={link} target="_blank">
                        <h1>{link}</h1>
                      </a>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      );
  }
};
module.exports = Resources;