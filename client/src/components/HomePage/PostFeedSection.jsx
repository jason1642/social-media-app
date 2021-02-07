import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CreatePostBox from './CreatePostBox.jsx'
import PostCard from '../PostCard/PostCard'
import { getOneUser } from '../../Services/api-helper'

const PostFeedSection = props => {
  const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-right: 25px;
  width: 75%;
`;

  return (

    <Main>
      <CreatePostBox />
      {
        props.postList.map(post => {
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