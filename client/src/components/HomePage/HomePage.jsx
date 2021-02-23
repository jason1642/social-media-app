import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css'
import styled from 'styled-components'
import SideBar from './SideBar.jsx'
import { getAllComments, getAllPosts, postPost, putPost, destroyPost, loginUser, verifyUser } from '../../Services/api-helper';
import PostFeedSection from './PostFeedSection.jsx'
import CreatePostBox from './CreatePostBox.jsx'

const HomePage = props => {

  const Main = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-top: 60px;
    `

  const Container = styled.div`
    display : flex;
    margin: 0 auto;
    margin-top: 16px;
    flex-direction: row;
    width: 90%;
  `;

  const [posts, setPosts] = useState()

  const readAllPosts = async () =>
    await getAllPosts().then(v => setPosts(v.reverse()));


  // readAllPosts()
  useEffect(() => {
    document.title = 'Home Page'
    readAllPosts()
    console.log(props.reRenderPosts)
  }, [props.rerenderPosts])
  // props.rerenderPosts is a boolean in Container.jsx 
  // defaults false, if post is created, deleted or edited, will
  // make another request to get posts data and update postfeed
  return (

    <Main>

      {/* Container to separate feed and sidebar */}
      <Container >

        {posts
          && <>
            <PostFeedSection {...props} posts={posts} />
            <SideBar /> </>
        }
      </Container>
    </Main>
  )

}

export default HomePage