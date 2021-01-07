import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css'
import styled from 'styled-components'
import SideBar from './SideBar.jsx'
import PostFeedSection from './PostFeedSection.jsx'


const HomePage = props => {

  const Main = styled.div`
      width: 70%;
      margin: 0 auto;
    `

  const Container = styled.div`
    display : flex;
    margin: 0 auto;
    flex-direction: row;
    width: 90%;
  `;



  return (
    <Main>
      <h3 className='latest-posts-title'>Latest Posts</h3>
      <Link>
        <div>
          <input placeholder='Create a post' />
        </div>
      </Link>
      {/* Container to separate feed and sidebar */}
      <Container >

        <PostFeedSection {...props} postList={props.postList} />

        <SideBar />
      </Container>
    </Main>
  )

}

export default HomePage