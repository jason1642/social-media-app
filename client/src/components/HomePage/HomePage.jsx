import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css'
import styled from 'styled-components'
import SideBar from './SideBar.jsx'
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


  useEffect(() => {
    document.title = 'Home Page'

  }, [])
  return (
    <Main>

      {/* Container to separate feed and sidebar */}
      <Container >

        <PostFeedSection {...props} postList={props.postList} />

        <SideBar />
      </Container>
    </Main>
  )

}

export default HomePage