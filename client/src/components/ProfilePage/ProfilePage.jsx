import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { getAllUsersPosts, getOnePost } from '../../Services/api-helper'
import PostCard from '../PostCard/PostCard'

const ProfilePage = props => {
  const Container = styled.div`
    /* height: 100px; */
    width: 75%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: grey;
    color: black;
    margin: 3% auto;
    margin-right: 25px;
  `;

  const [posts, setPosts] = useState()

  const getAllCurrentUsersPosts = async () => {
    // change '2' to current user
    const HTMLPosts = await getAllUsersPosts(2).then(ele => ele.map(v =>
      // console.log(v)
      < PostCard {...props} postData={v} />
    ))
    setPosts(HTMLPosts)

  }

  useEffect(() => {
    getAllCurrentUsersPosts()
  }
    , [])

  console.log(posts)
  return (
    <Container>
      {posts && posts}

    </Container>
  )
}
export default ProfilePage