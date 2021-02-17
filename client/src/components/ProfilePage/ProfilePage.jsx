import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { getAllUsersPosts, getOnePost, verifyUser } from '../../Services/api-helper'
import PostCard from '../PostCard/PostCard'
import SideBar from './SideBar'

const ProfilePage = props => {
  const Container = styled.div`
    /* height: 100px; */
    width: 80%;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    color: black;
    margin: 3% auto;
  `;

  const PostsSide = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin: 4% 0;
    margin-right: 14px;
    width: 80%; 
  `;

  const [posts, setPosts] = useState()


  const getAllCurrentUsersPosts = async userId => {
    // change '2' to current user
    const HTMLPosts = await getAllUsersPosts(userId).then(ele => ele.map(v =>
      // console.log(v)
      < PostCard {...props} postData={v} />
    ))
    setPosts(HTMLPosts)
  }

  useEffect(() => {
    // Must have async function within useEffect, or else promise wont be resolved
    // Create async function so the promise can be used to pass data into the other function, then 
    // call the entire function after
    const getCurrentUser = async () => {
      const textx = await verifyUser().then(v => v.id)
      getAllCurrentUsersPosts(textx)
    }
    getCurrentUser()
  }, [])

  // console.log(posts)
  return (
    <Container>
      <PostsSide>
        <h2>These are all your Posts!</h2>
        {posts && posts}
      </PostsSide>
      <>
        <SideBar />
      </>

    </Container>
  )
}
export default ProfilePage