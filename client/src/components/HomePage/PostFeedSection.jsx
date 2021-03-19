import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import CreatePostBox from './CreatePostBox.jsx'
import PostCard from '../PostCard/PostCard'


const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-right: 25px;
  width: 75%;
`;


const PostFeedSection = props => {

  return (

    <Main>
      <CreatePostBox />
      {
        props.posts.map(post => {
          return (
            <React.Fragment key={post.id}>
              <PostCard {...props} postData={post} />
            </React.Fragment>

          )
        })
      }
    </Main >
  )

}

export default PostFeedSection