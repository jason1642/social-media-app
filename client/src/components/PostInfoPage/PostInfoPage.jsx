import React, { Component, useEffect, useState } from 'react'
import { getOnePost, addComment, getAllComments, verifyUser, getOneUser } from '../../Services/api-helper'
import './PostInfoPage.css'
import CommentSection from './CommentSection/CommentSection'
import styled from 'styled-components'
import TitleBar from './TitleBar'
import Content from './Content'
import SideBar from './SideBar'


const PostInfoPage = props => {

  const [post, setPost] = useState()
  const [currentUserId, setCurrentUserId] = useState()
  const [currentUser, setCurrentUser] = useState()

  const setCurrentPost = async () => {
    const post = await getOnePost(props.postId);
    setPost(post)

  }
  useEffect(() => {
    const currentUser1 = verifyUser();
    currentUser1.then(v => setCurrentUser(v))
    currentUser1 && setCurrentUserId(currentUser1.id)
    setCurrentPost()

    // document.title = post.title
  }, [])


  const Container = styled.div`
    width: 80%;
    margin: 3% auto;
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
  `;
  const Main = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin: 4% 0;
    margin-right: 14px;
    /* border: 1px solid black; */

  `;

  const SidesContainer = styled.div`
    display: flex;
    margin-top: 18px;
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
              <CommentSection post={post}
                currentPost={post}
                currentUserData={currentUser}
                currentUser={currentUserId}
                postId={props.postId}
              />
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

