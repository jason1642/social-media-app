import React, { Component, useEffect, useState } from 'react'
import { getOnePost, addComment, getAllComments, verifyUser, getOneUser } from '../../Services/api-helper'
import './PostInfoPage.css'
import CommentSection from './CommentSection'
import styled from 'styled-components'
import TitleBar from './TitleBar'
import Content from './Content'
import SideBar from './SideBar'


const PostInfoPage = props => {

  const [commentText, setCommentText] = useState()
  const [post, setPost] = useState()
  const [currentUserId, setCurrentUserId] = useState()



  const setCurrentPost = async () => {
    const post = await getOnePost(props.postId);
    setPost(post)

  }


  const handleChange = (e) => {
    const { value } = e.target;
    setCommentText(value)
  }

  // Submits the completed form to api-helper create
  const handleSubmit = async () => {
    await addComment({
      comment_text: commentText,
      user_id: currentUserId,
      post_id: props.postId
    });


  }

  useEffect(() => {
    const currentUser1 = verifyUser();
    currentUser1 && setCurrentUserId(currentUser1.id)
    setCurrentPost()
    // document.title = post.title

  }, [])


  const Container = styled.div`
    width: 90%;
    margin: 3% auto;
    border: 1px solid black;
  `;
  const Main = styled.div`
    display: flex;
    flex-grow: 1;
    margin-right: 18px;
    border: 1px solid black;
  `;

  const SidesContainer = styled.div`
    display: flex;
    margin-top: 55px;
    justify-content: space-between;
  `;
  return (
    <>
      {
        post &&

        <Container>

          <TitleBar title={post.title} />


          <SidesContainer>
            <Main>


              <Content postData={post} />






              {/* Comment section */}



            </Main>





            <SideBar />
          </SidesContainer>

        </Container>


      }
    </>
  )

}

export default PostInfoPage

























{/* {
              currentUserId == post.user_id ?
                <>
                  <button onClick={() => {
                    props.history.push(`/posts/${post.id}/edit`);
                  }}>Edit</button>
                  <button onClick={() => {
                    props.handlePostDelete(post.id);
                    props.history.push(`/`);
                  }}>Delete</button>
                </>
                :
                <> </>
            } */}

{/* <div className='comment-container'><h1 className='add-comment-title'>Comments</h1><form className='comment-input-box'onSubmit= {
   (e)=> {

     handleSubmit() return props.history.push(`/posts/$ {
         post.id
       }

       `)
   }
 }

 ><input type='text'

 value= {
   commentText
 }

 name='commentText'

 onChange= {
   handleChange
 }

 placeholder='Add your comment here!'

 /><button className='submit-button comment-submit-button'>Add comment</button></form><CommentSection currentPost= {
   post
 }

 postId= {
   props.postId
 }

 /></div> */}