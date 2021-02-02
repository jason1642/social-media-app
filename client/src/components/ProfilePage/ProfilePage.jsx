import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { getAllUsersPosts } from '../../Services/api-helper'

const ProfilePage = props => {
  const Container = styled.div`
    height: 100px;
    width: 100px;
    background-color: grey;
    color: black;
  `;

  const [posts, setPosts] = useState()

  const getAllCurrentUsersPosts = async () => {
    const HTMLPosts = await getAllUsersPosts(2).then(ele => ele.map(v =>
      <div>
        <h2>{v.title}</h2>
        <p>string</p>
        <p>{v.description}</p>
      </div>
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