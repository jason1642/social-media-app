import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { addComment, verifyUser } from '../../../Services/api-helper'
import styled from 'styled-components'
import MappedComments from './MappedComments'
import './CommentSection.css'

// Using React Hooks with onchange functions to create comment submission
// functionality creates bugs with unwanted rerenders of this component

// If user input in empty, reject post request
export default class CommentSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentText: ''
    }

    this.Container = styled.div`
      margin: 0 auto;
      /* border: 1px solid black; */
      width: 100%;
      margin: 0 auto;
  `;
    this.AddCommentTitle = styled.div`
      text-align: left;
      width: 85%;
      margin: auto auto;
      padding: 8px 0 8px 0;
  `;

  }



  handleChange = e => {
    const { value } = e.target;
    this.setState({
      commentText: value
    });
  }
  handleSubmit = async () => {
    //comment post request reqires post_id, comment_id, string
    await addComment({
      comment_text: this.state.commentText,
      user_id: this.state.currentUser.id,
      post_id: this.props.postId
    });
  }
  async componentDidMount() {
    const loggedInUser = await verifyUser()
    this.setState({
      currentUser: loggedInUser
    })
  }
  // const [commentText, setCommentText] = useState('')

  // Submits the completed form to api-helper create


  render() {
    return (
      <>
        <this.Container>



          <form className='comment-input-box' onSubmit={
            (e) => {
              this.handleSubmit()
              return <Redirect to={`/posts/${this.props.post.id}`} />
            }
          }>
            <this.AddCommentTitle>
              Comment as {this.props.currentUserData.username}
            </this.AddCommentTitle>
            <textarea
              type='textarea'
              value={this.state.commentText}
              name='commentText'
              onChange={this.handleChange}
              placeholder='Write a comment'
            />
            <div className='comment-input-footer'>
              <button className='submit-button comment-submit-button'>Comment</button>
            </div>
          </form>

          <MappedComments currentPost={this.props.currentPost} postId={this.props.postId} />


        </this.Container>

      </>
    )
  }
}







