import React, { Component } from 'react'; 
import './profile.css';  
import { connect } from 'react-redux'  
import {getProfileData, getPosts, getComments} from '../../actions/pageActions'
import Profile from './Profile';
import Post from '../Posts/Post' 
import Header from '../../components/Header/Header'; 
import {filterComments} from '../Comments/commentsForSinglePost'

 class ProfilePage extends Component {   
 componentDidMount() {
   this.props.getPosts() 
   this.props.getComments()
   this.props.getProfileData()
 } 
  render(){    
    let posts = this.props.posts ?  this.props.posts.posts.sort((a, b) => b.id - a.id) : [] 
    let comments = this.props.comments.comments ? this.props.comments.comments : []  
    let userId = this.props.profile.profile.data ? this.props.profile.profile.data.id : '' 

    return( 
      <div>
        <Header />
        <div className='profile'> 
            <Profile profile={this.props.profile.profile} />
            <div className="profilePosts">  
                  { (this.props.profile.profile.data) && 
                    posts.map(post => (post.user_id === userId) &&
                    <Post key ={post.id} post ={post} comments={filterComments(post.id, comments)}/> 
                    ) 
                  } 
            </div> 
        </div>
      </div>          
    );

  }
}  
const mapStateToProps = store =>{ 
  return {
    posts: store.posts,
    profile: store.profile, 
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
  mapDispatchToProps)(ProfilePage) 
