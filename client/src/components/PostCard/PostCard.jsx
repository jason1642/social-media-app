import React from 'react';
import styled from 'styled-components'

const PostCard = props => {
  const Container = styled.div`
    width: 100%;
    min-height: 100px;
    max-height: 118px;
    margin: 10px 0;
    background-color: white;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    &:hover{
      box-shadow: 0 6px 16px 0 #acacac;
      transition: box-shadow .5s;
      cursor: pointer;
    }
    /* border: 1px solid black; */
  `;
  const UpvoteSide = styled.div`
    border-right: .5px solid black;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const Main = styled.div`
    display: flex;
    width: 100%;
    margin: 1px 8px;
    padding-top: 8px;
    justify-content: space-between;
    flex-direction: column;
    & > div{
      width: 100%;
      /* border: 1px solid black; */
      text-align: left;
    }
  `

  const Title = styled.div`
    font-size: 18px;
    overflow: hidden;
  `;

  const TopRow = styled.div`
    /* color: #414141; */
    font-size: 12px;
  `;

  const Footer = styled.div`
    /* color: #3b3b3b; */
    font-weight: bold;
    font-size: 12px;
    padding-bottom: 5px;
  `;
  console.log(props.postData)
  return (
    <Container onClick={e => props.history.push(`/posts/${props.postData.id}`)}>
      <UpvoteSide>
        UP
      </UpvoteSide>
      <Main>
        <TopRow>Posted by: {props.postData.username}</TopRow>
        {/* title min chars: 15 */}
        <Title>{props.postData.title}</Title>
        {/* Number of comments */}
        <Footer>{'2.3k'} Comments</Footer>
      </Main>
    </Container>
  );
}

export default PostCard;


// <PostFeedCard onClick={e => props.history.push(`/posts/${post.id}`)}
//   className='postfeed-card'>
//   <div className='postfeed-card-title'>
//     <Link
//       className='postfeed-card-title-link'
//       to={`/posts/${post.id}`}>
//       {post.title}
//     </Link>
//   </div>
//   <div className='postfeed-card-image-container'>
//     <img onError={"this.style.display='none'"} className='postfeed-card-image' src={post.image_url} />
//   </div>
//   <div className='postfeed-card-description'>{post.description}</div>

//   <br />
// </PostFeedCard>