import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { getAllUsersPosts, getOnePost, verifyUser } from '../../Services/api-helper'
import PostCard from '../PostCard/PostCard'
import SideBar from './SideBar'

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

const ProfilePage = props => {


  const [posts, setPosts] = useState()
  const [currentUser, setCurrentUser] = useState(props.currentUser)

  const getAllCurrentUsersPosts = async currentUser => {
    // change '2' to current user
    const HTMLPosts = await getAllUsersPosts(currentUser.id).then(ele => ele.map(v =>
      // console.log(v)
      <PostCard {...props} postData={v} />
    ))
    setPosts(HTMLPosts)
  }

  useEffect(() => {
    // Must have async function within useEffect, or else promise wont be resolved
    // Create async function so the promise can be used to pass data into the other function, then 
    // call the entire function after

    getAllCurrentUsersPosts(currentUser)

  }, [])

  // console.log(posts)
  return (
    <Container>
      <PostsSide>

        {posts && posts.length > 0 ?
          <><h2>These are all your Posts!</h2>
            {posts}
          </>
          :
          <h2>You have no posts</h2>}
      </PostsSide>
      <>
        <SideBar currentUser={currentUser} />
      </>

    </Container>
  )
}
export default ProfilePage