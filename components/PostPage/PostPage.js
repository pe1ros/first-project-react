import React, { Component } from 'react'; 
import './postpage.css'
import { Redirect  } from 'react-router-dom'; 
import { connect } from 'react-redux'  
import {getProfileData, getPosts, getComments} from '../../actions/pageActions'
import {changePost} from '../../actions/pageActions'
import CommentForm from '../../Comments/CommentForm';

class PostPage extends Component {  
    constructor( ){
        super( )
    
        this.state = {
          "title": '',
          "description": '', 
          "id": '',
        } 
      }  
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value}) 
        this.state.id = this.props.location.props.id
      } 
      submitHandler =  (e) =>  {
        e.preventDefault() 
        this.props.changePost(this.state) 
        
      }  
    render(){  
        const {title, description} = this.state

        return (  
            <div className='postpage'> 
                {
                    (this.props.location.props )?
                        (this.props.location.props.user_id === this.props.profile.profile.data.id) ?
                        <div >  
                            <div>
                                <div>
                                    <h3> User_ID: {this.props.location.props.user_id} </h3>
                                    <h3>Add_time: { this.props.location.props.create_time}</h3>
                                </div> 
                                <div >
                                <h3>Заголовок:</h3> {this.props.location.props.title}
                                </div>
                                <div>
                                <h3>Описание:</h3> {this.props.location.props.description} 
                                </div> 
                            </div>
                            <div  >
                                <form onSubmit={this.submitHandler} > 
                                    <h5><p>Заголовок:<input
                                                        required="required"
                                                        type="text" 
                                                        name="title" 
                                                        value={title} 
                                                        onChange={this.changeHandler} /></p></h5>
                                    <h5><p>Описание :<input
                                                        required="required" 
                                                        type="text" 
                                                        name="description" 
                                                        value={description} 
                                                        onChange={this.changeHandler} /></p></h5>
                                    <button type="submit">Изменить пост</button>
                                </form>  
                            </div>
                            <div>
                            <CommentForm id = {this.state.id}/>
                            </div>
                        </div> : 
                        <div>
                            <div>
                                <div>
                                    <h3> User_ID: {this.props.location.props.user_id} </h3>
                                    <h3>Add_time: { this.props.location.props.create_time}</h3>
                                </div> 
                                <div >
                                <h3>Заголовок:</h3> {this.props.location.props.title}
                                </div>
                                <div>
                                <h3>Описание:</h3> {this.props.location.props.description} 
                                </div> 
                            </div>
                            <div>
                                <CommentForm id = {this.props.location.props.id}/>
                            </div>                          
                        </div>
                    : <Redirect to="/mainpage"/> 
                }
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
        getPosts: dispatch(getPosts()), 
        getProfileData: dispatch(getProfileData()),
        getComments: dispatch(getComments()),
        changePost: post => dispatch(changePost(post))
    }
  } 
  export default  connect(
    mapStateToProps, 
    mapDispatchToProps)(PostPage)  
  