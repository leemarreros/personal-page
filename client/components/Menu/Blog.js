'use strict';

import React from 'react';
import posts from '../../blogPosts';

class Blog extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      readingPost: false,
      currentPost: null,
      recent: true,
      popular: false,
      valueTextArea: ''
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

  handleFilter(option){
    switch(option) {
      case 'recent':
        this.setState({recent: true});
        this.setState({popular: false});
        posts.sort((prev, next)=> {
          return prev.date -next.date;
        })
        break;
      case 'popular':
        this.setState({recent: false});
        this.setState({popular: true});
        posts.sort((prev, next)=> {
          return next.likes - prev.likes;
        })
        break;
      default:
    }
  }

  formatDate(timestamp) {
    console.log(timestamp);
    var res = "";
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date(timestamp);
    res+= res + days[date.getDay()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    console.log(res);
    return res;
  }

  onCommenting() {
    this.setState({commenting: !this.state.commenting});
  }

  onAddComment(){
    console.log(this.state.valueTextArea);
    if (this.state.valueTextArea==="") return;
    posts[this.state.currentPost].comments.push({
      description: this.state.valueTextArea,
      author: 'Hans S.',
      img: './img2xOpt/profile-pic-comment.png'
    });
    this.setState({valueTextArea: ''});
  }

  handleAreaText(event, value) {
    this.setState({valueTextArea: event.target.value});
    console.log(event.target.value);
  }

  render() {
    return (
      <div className='wrapperBlog'>
      {this.state.readingPost ?
        <div className='wrapperCurrentPost'>
          <span  onClick={this._onPostClick.bind(this)}><h1>All articles</h1></span>
          <div className='post'>
            <span><p>{this.formatDate(posts[this.state.currentPost].date)}</p></span>
            <div className='headerpost'>
              <span><p>{posts[this.state.currentPost].title}</p></span>
              <div className='imageWrapper'>
                <img src={'../../img2xOpt/fb-share-icon.png'}/>
                <img src={'../../img2xOpt/twitter-icon-share.png'}/>
              </div>
            </div>
            <span><p>{posts[this.state.currentPost].post}</p></span>
            <div className='line'><hr/></div>
            <span><h1>Comments</h1></span>
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
            <span onClick={this.onCommenting.bind(this)}>Add a comment</span>
            {this.state.commenting ?
              <div className='wrapperComment'>
                <div><textarea className='inputComment' type='text' value={this.state.valueTextArea} onChange={this.handleAreaText.bind(this)}/></div>
                <div className='btAddComment' onClick={this.onAddComment.bind(this)}>
                  <div>
                    Add
                  </div>
                </div>
              </div>
              : null}
          </div>
        </div>
        :
        <div className='wrapperBlogPanel'>
          <div className='wrappFilters'>
            <span><h1>Filter by:</h1></span>
            <span onClick={this.handleFilter.bind(this, 'recent')}>
              <h1 style={this.state.recent ? {fontWeight: 'bold'} : null}>Most Recent</h1>
            </span>
            <span onClick={this.handleFilter.bind(this, 'popular')}>
              <h1 style={this.state.popular ? {fontWeight: 'bold'} : null}>Most Popular</h1>
            </span>
          </div>
          <div className='wrappPosts'>
            {posts.map((post, i) => {
              return (
                <div key={i} className='articleCont' onClick={this._onPostClick.bind(this, i)}>
                  <span><h1>{post.title}</h1></span>
                  <span><h1>{post.likes} ✌ </h1></span>
                  <span><h1>{this.formatDate(post.date)}</h1></span>
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