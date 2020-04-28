import React, { Component } from 'react';   
import { connect } from 'react-redux' 
import Comment from './Comment' 

class CommentForm extends Component { 
    constructor( ){
      super( )
  
      this.state = {
        "text": '',  
      } 
    } 
    
    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    } 
    submitHandler =  (e) =>  {
      e.preventDefault()  
      
    }  
    showComments = () =>{ 
    }
    render(){  
      const list = this.props.comments.comments.map(post=> 
       <Comment 
              key={post.id} 
              user_id={post.user_id} 
              created_at={post.created_at}
              message={post.message}  />) 
      const {text} = this.state 
        return (
        <div  >
          <div  >
            <form onSubmit={this.submitHandler} > 
              <h5><p>Текст комментария:<input 
                                  required="required"
                                  type="text" 
                                  name="text" 
                                  value={text} 
                                  onChange={this.changeHandler} /></p></h5>
              <button type="submit">Add_comment</button>
            </form>   
            <button onClick={this.showComments}>Show_comments</button>
          </div>
          <div> 
            {list}
          </div>
        </div> 
        )
    } 
  }  
  const mapStateToProps = store =>{ 
    return { 

      comments: store.comments,
    }
  
  }
  
  const mapDispatchToProps = dispatch => {
    return {
         
    }
  } 
export default connect(
    mapStateToProps, 
    mapDispatchToProps)(CommentForm)
