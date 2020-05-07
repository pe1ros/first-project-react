import React, { Component } from "react";
import { connect } from "react-redux";
import Post from './Post'
import {getComments, getPosts} from '../../actions/pageActions'
import {filterComments} from '../Comments/commentsForSinglePost'
 
class Posts extends Component { 

  componentDidMount() {
    this.fetchComments();
    this.props.getPosts()
  }

  fetchComments() {
    this.props.getComments();
  }

  render() {
    let posts = this.props.posts;
    let comments = this.props.comments.comments; 
    return (
      <div>
        {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              comments={filterComments(post.id, comments)} 
            />
          ))}
      </div>
    );
  }
}
const mapStateToProps = store =>{ 
    return { 
      comments: store.comments,  
    }
  
  } 
  const mapDispatchToProps = dispatch => {
    return {  
      getComments: comments => dispatch(getComments()), 
      getPosts: posts =>dispatch(getPosts()),
    }
  }  
  export default  connect(
    mapStateToProps, 
    mapDispatchToProps)(Posts)
