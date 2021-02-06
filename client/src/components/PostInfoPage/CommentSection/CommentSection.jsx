import React, { useEffect, useState } from 'react';
import { getAllPosts, addComment, getAllComments, getOneUser } from '../../../Services/api-helper'
import styled from 'styled-components'
import MappedComments from './MappedComments'


const CommentSection = props => {


  const Container = styled.div`
    margin: 0 auto;
    border: 1px solid black;
    width: 100%;
    margin: 0 auto;
  `;


  const AddCommentTitle = styled.div`
    text-align: left;
  `;

  const [comments, setComments] = useState()
  const [commentText, setCommentText] = useState()

  const handleChange = (e) => {
    const { value } = e.target;
    setCommentText(value);
  }

  // Submits the completed form to api-helper create
  const handleSubmit = async () => {
    await addComment({
      comment_text: commentText,
      user_id: props.currentUser,
      post_id: props.postId
    });


  }



  useEffect(() => {

  }, [])

  // console.log(allHTML)
  return (
    <Container>
      <AddCommentTitle>Comment as {props.currentUserData.username}</AddCommentTitle>
      <form className='comment-input-box' onSubmit={
        (e) => {
          handleSubmit()
          return props.history.push(`/posts/${props.post.id}`)
        }
      }>
        <input type='text' value={commentText} name='commentText'
          onChange={handleChange} placeholder='Add your comment here!' />
        <button className='submit-button comment-submit-button'>Add comment</button></form>

      <MappedComments currentPost={props.currentPost} postId={props.postId}></MappedComments>




    </Container>
  )
}

export default CommentSection






