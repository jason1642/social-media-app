import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CreatePostBox from './CreatePostBox.jsx'

const PostFeedSection = props => {
  const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-right: 25px;
  width: 75%;
  /* @media(max-width: 500px) {
    flex-direction: column;
    width: 100%;
}
  @media(min-width: 500px) {
  justify-content: space-around;
  width: 100%;
} */
`;

  const PostFeedCard = styled.div`
  /* box-shadow: 0 6px 16px 0 # acacac; */
  width: 100%;
  margin: 10px 0;
  background-color: white;
  display: flex;
  border-radius: 5px;
  height: 60vh;
  flex-direction: column;
  &:hover{
    box-shadow: 0 6px 16px 0 #acacac;
    transition: box-shadow .5s;
    cursor: pointer;
  }

  @media(max-width: 500px) {
    width: 100%;
    margin: 15px auto;
}

  /* @media(min-width: 500px) {
    width: 100%;
    margin: 15px auto;
} */

`;

  return (

    <Main>
      <CreatePostBox />
      {
        props.postList.map(post => {

          return (
            <React.Fragment key={post.id}>
              <PostFeedCard onClick={e => props.history.push(`/posts/${post.id}`)}
                className='postfeed-card'>
                <div className='postfeed-card-title'>
                  <Link
                    className='postfeed-card-title-link'
                    to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </div>
                <div className='postfeed-card-image-container'>
                  <img onError={"this.style.display='none'"} className='postfeed-card-image' src={post.image_url} />
                </div>
                <div className='postfeed-card-description'>{post.description}</div>
                {/* <p>Posted by: {post.user.name}</p> */}
                {console.log(post)}

                <br />
              </PostFeedCard>
            </React.Fragment>

          )
        })
      }
    </Main >
  )

}

export default PostFeedSection