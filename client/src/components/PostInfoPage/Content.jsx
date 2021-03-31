import React from "react";
import styled from "styled-components";
import moment from "moment"; // library to display how long ago comment was posted

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  margin: 10px 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  border-bottom: 1px solid grey;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1.5rem 4rem;
`;
const Main = styled.div`
  display: flex;
  width: 100%;
  margin: 1px 8px;
  padding-top: 8px;
  flex-direction: column;
  & > div {
    width: 100%;
    /* border: 1px solid black; */
    text-align: left;
  }
`;
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
  background-image: linear-gradient(
    to right bottom,
    rgb(125, 213, 111),
    rgb(40, 180, 135)
  );
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

const Content = (props) => {
  return (
    <Container>
      <UpvoteSide></UpvoteSide>
      <Main>
        <UsernameRow>
          Posted by: <b>{props.postData.user.username}</b> -{" "}
          {moment(props.postData.created_at).fromNow()}
        </UsernameRow>
        <Title>{props.postData.title}</Title>
        <Description></Description>
      </Main>
    </Container>
  );
};

export default Content;
