import React from 'react';
import styled from 'styled-components'
import moment from 'moment'; // library to display how long ago comment was posted


const Content = props => {

  const Container = styled.div`
    width: 100%;
    min-height: 100px;
    margin: 10px 0;
    background-color: white;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    
  `;
  const Main = styled.div`
    display: flex;
    width: 100%;
    margin: 1px 8px;
    padding-top: 8px;
    flex-direction: column;
    & > div{
     width: 100%;
      /* border: 1px solid black; */
      text-align: left;
    }
    `
  const UsernameRow = styled.div`
    /* border: 1px solid black; */
    margin: 0 4px;
    font-size: 11px;
    line-height: 20px;
    margin: 0 8px 8px;

  `;
  const UpvoteSide = styled.div`
  /* border-right: .5px solid black; */
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  border-radius: 5px 0 0 5px;
`;

  const Title = styled.div`
    display: flex;
    font-weight: bold;
    /* border: 1px solid black; */
    margin: 0 8px 8px;
    font-size: 25px;
  `;
  const Description = styled.div`
    margin: 0 8px 8px;

  `;
  return (
    <Container>
      <UpvoteSide>

      </UpvoteSide>
      <Main>
        <UsernameRow>
          Posted by: {props.postData.user.username} - {moment(props.postData.created_at).fromNow()}
        </UsernameRow>
        <Title>{props.postData.title}</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro architecto pariatur voluptatem officia quisquam ea iusto a quidem. Possimus eveniet nemo aliquam non asperiores repellendus temporibus quo earum ex.
        </Description>
      </Main>
    </Container>
  );
}

export default Content;