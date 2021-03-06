import React from 'react';
import styled from 'styled-components';
import moment from 'moment'; // library to display how long ago comment was posted

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  max-height: 118px;
  margin: 10px 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1.5rem 4rem;

  &:hover {
    box-shadow: 0 6px 16px 0 #acacac;
    transition: box-shadow 0.5s;
    cursor: pointer;
  }
  /* border: 1px solid black; */
`;
const UpvoteSide = styled.div`
  /* border-right: .5px solid black; */
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(
    to right bottom,
    rgb(125, 213, 111),
    rgb(40, 180, 135)
  );
`;
const Main = styled.div`
  display: flex;
  width: 100%;
  margin: 1px 8px;
  padding-top: 8px;
  justify-content: space-between;
  flex-direction: column;
  & > div {
    width: 100%;
    /* border: 1px solid black; */
    text-align: left;
  }
`;

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

const DateCreated = styled.span`
  font-size: 0.9em;
  margin-left: 7px;
`;

const PostCard = props => {
  // console.log(props.postData)

  // useEffect(() => {

  // },[props.postData])

  return (
    <>
      {props.postData.user ? (
        <Container
          onClick={e => props.history.push(`/posts/${props.postData.id}`)}
        >
          <UpvoteSide></UpvoteSide>
          <Main>
            <TopRow>
              Posted by: <b>{props.postData.user.username}</b>
              <DateCreated>
                {moment(props.postData.created_at).fromNow()}
              </DateCreated>
            </TopRow>
            {/* title min chars: 35 */}
            <Title>{props.postData.title}</Title>
            {/* Number of comments */}
            <Footer>{props.postData.comments.length} Comments</Footer>
          </Main>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

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
