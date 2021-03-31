import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30px;
  flex-grow: 2;
  flex-shrink: 1;
`;
const NameTitle = styled.h2`
  font-size: 30px;
  font-weight: 300;
  padding: 0;
  margin: 0.5em;
  margin-left: 0;
`;
const EditPageButton = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5px 9px;
  font-weight: 600;
  text-transform: inherit;
  text-overflow: ellipsis;
  margin: 15px 0;
  border: 1px solid grey;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const ChangeButton = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: grey;
  }
`;

const RowOne = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
const RowTwo = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 16px;
  height: 18px;
`;
const RowThree = styled.div`
  display: flex;
`;

const BioSide = (props) => {
  const dateCreated = Date(props.currentUser.created_at);
  return (
    <Container currentUser={props.currentUser}>
      <RowOne>
        <NameTitle>{props.currentUser.username}</NameTitle>
        <EditPageButton to="/profile/edit">Edit Profile</EditPageButton>
      </RowOne>

      <RowTwo>
        <p style={{ marginRight: "40px", display: "inline-block" }}>
          <b>
            {console.log(props)}
            {props.currentUser.posts
              ? props.currentUser.posts.length
              : "0 "}{" "}
          </b>
          posts
        </p>
        <p style={{ marginRight: "40px", display: "inline-block" }}>
          Joined {dateCreated}
        </p>
      </RowTwo>

      <RowThree>
        <p>
          {props.currentUser.bio}
          {/* <input
          placeholder={
            props.currentUser.bio ? props.currentUser.bio : "Write a bio"
          }
        /> */}
        </p>
      </RowThree>
      {/* <ChangeButton to="/profile/change_avatar">
        Change Profile Picture
      </ChangeButton> */}
      {/* <EditForm /> */}
    </Container>
  );
};

export default BioSide;
