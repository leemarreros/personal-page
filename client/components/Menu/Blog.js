'use strict';

import React from 'react';
import posts from '../../blogPosts';

class Blog extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      readingPost: false,
      currentPost: null
    };
  }

  _onPostClick(i) {
    if (!this.state.readingPost) {
      this.setState({currentPost: i});
      this.setState({readingPost: true});
      return;
    }
    this.setState({readingPost: false});
  }

  render() {
    return (
      <div className='wrapperBlog'>
      {this.state.readingPost ?
        <div className='wrapperCurrentPost'>
          <span  onClick={this._onPostClick.bind(this)}><h1>All articles</h1></span>
          <div className='post'>
            <span><p>{posts[this.state.currentPost].date}</p></span>
            <div className='headerpost'>
              <span><p>{posts[this.state.currentPost].date}</p></span>
              <img src={'../../img2xOpt/fb-share-icon.png'}/>
              <img src={'../../img2xOpt/twitter-icon-share.png'}/>
            </div>
            <span><p>{posts[this.state.currentPost].post}</p></span>
            <div className='commentWrapper'>
              {posts[this.state.currentPost].comments.map((comment, i)=>{
                return (
                  <div key={i} className='commentContent'>
                    <div className='userInfo'>
                      <img src={comment.img}/>
                      <span><h1>{comment.author}</h1></span>
                    </div>
                    <div className='commentDescription'>
                      <span><h1>{comment.description}</h1></span>
                    </div>
                  </div>
                );
              })}
            </div>
            <span>Add a comment</span>
          </div>
        </div>
        :
        <div className='wrapperBlogPanel'>
          <div className='wrappFilters'>
            <span><h1>Filter by:</h1></span>
            <span><h1>Most Recent</h1></span>
            <span><h1>Most Popular</h1></span>
          </div>
          <div className='wrappPosts'>
            {posts.map((post, i) => {
              return (
                <div key={i} className='articleCont' onClick={this._onPostClick.bind(this, i)}>
                  <span><h1>{post.title}</h1></span>
                  <span><h1>{post.likes} ✌ </h1></span>
                  <span><h1>{post.date}</h1></span>
                </div>
              );
            }, this)}
          </div>
        </div>
      }
      </div>
    );
  }
};
module.exports = Blog;