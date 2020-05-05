import React, { Component } from 'react';  
import {onAddPost, getPosts} from '../../actions/pageActions' 
import { connect } from 'react-redux' 
import Button from '@material-ui/core/Button'; 
import TextField from '@material-ui/core/TextField';

class FormPost extends Component { 
    constructor( ){
      super( )
  
      this.state = {
        "title": '',
        "description": '', 
      } 
    } 
    
    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    } 
    submitHandler =  (e) =>  {
      e.preventDefault() 
      this.props.onAddPost(this.state)  
      this.props.getPosts()
      
    }  
    render(){ 
      const {title, description} = this.state
        return (
        <div  >
          <div  >
            <form onSubmit={this.submitHandler} > 
            <TextField label='Заголовок' 
                                  required 
                                  type="text" 
                                  name="title" 
                                  value={title} 
                                  onChange={this.changeHandler} /> 
              <TextField label='Описание'
                                  required 
                                   type="text" 
                                  name="description" 
                                  value={description} 
                                  onChange={this.changeHandler} /> 
              <Button variant="contained" color="primary" type="submit">Create Post</Button>
            </form>  
          </div>
        </div> 
        )
    } 
  }  
  const mapStateToProps = store =>{ 
    return {
      post: store.post,  
    }
  
  }
  
  const mapDispatchToProps = dispatch => {
    return {
   
      onAddPost: post => dispatch(onAddPost(post)),
      getPosts: posts =>dispatch(getPosts()),
  
    }
  } 
export default connect(
    mapStateToProps, 
    mapDispatchToProps)(FormPost)
