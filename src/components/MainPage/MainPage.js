import React, { Component } from 'react';  
import './main.css';      
import { connect } from 'react-redux' 
import {getProfileData, getPosts, getComments} from '../../actions/pageActions' 
import FormPost from '../Posts/FormPost';
import Header from '../../components/Header/Header';
import Posts from '../Posts/Posts'

 class MainPage extends Component {  
  componentDidMount() {
    this.fetchPosts();
    this.props.getComments()
    this.props.getProfileData()
  } 
  fetchPosts() {
    this.props.getPosts();
  }
  render(){
    let comments = this.props.comments.comments ? this.props.comments.comments : [] 
    let posts = this.props.posts.posts ?  this.props.posts.posts.sort((a, b) => b.id - a.id) : [] 

    return( 
      <div> 
        <Header />  
        <div className='main'>
          <div>
              Количество постов:  {posts ? posts.length : '0'}
          </div>  
          <div className='main2'>
            <FormPost fetchPosts={() => this.fetchPosts()}/>
          </div>
          <div>
            <Posts posts={posts} comments={comments} /> 
          </div>
        </div>
      </div>
    );
  }
}  
const mapStateToProps = store =>{ 
  return {
    posts: store.posts,
    comments: store.comments,  
  }

} 
const mapDispatchToProps = dispatch => {
  return {
    getProfileData: profile => dispatch(getProfileData()),  
    getComments: comments => dispatch(getComments()),
    getPosts: posts => dispatch(getPosts()),  
  }
}  
export default  connect(
  mapStateToProps, 
  mapDispatchToProps)(MainPage)