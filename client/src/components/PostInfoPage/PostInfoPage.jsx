import React, { useEffect, useState } from 'react'
import { getOnePost } from '../../Services/api-helper'
import './PostInfoPage.css'
import CommentSection from './CommentSection/CommentSection'
import styled from 'styled-components'
import TitleBar from './TitleBar'
import Content from './Content'
import SideBar from './SideBar'


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
    width: 100%;
    margin-right: 14px;
    /* border: 1px solid black; */

  `;

const SidesContainer = styled.div`
    display: flex;
    margin-top: 18px;
    justify-content: space-between;
  `;

const PostInfoPage = props => {

  const [post, setPost] = useState()

  const setCurrentPost = async () => {
    const post = await getOnePost(props.postId);
    setPost(post)

  }
  useEffect(() => {
    setCurrentPost()

    // document.title = post.title
  }, [])

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
                currentUser={props.currentUser}
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