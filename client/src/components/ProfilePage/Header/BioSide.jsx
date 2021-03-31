import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  const dateCreated = props.currentUser.created_at;
  let year = dateCreated.slice(0, 4);
  let day = dateCreated.slice(8, 10);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month = months[Number.parseFloat(dateCreated.slice(5, 7)) - 1];

  return (
    <Container currentUser={props.currentUser}>
      <RowOne>
        <NameTitle>{props.currentUser.username}</NameTitle>
        <EditPageButton to="/profile/edit">Edit Profile</EditPageButton>
      </RowOne>

      <RowTwo>
        <p style={{ marginRight: '40px', display: 'inline-block' }}>
          <b>{props.posts ? props.posts.length : '0 '} </b> posts
        </p>
        <p style={{ marginRight: '40px', display: 'inline-block' }}>
          Joined {`${month} ${day}, ${year}`}
        </p>
      </RowTwo>

      <RowThree>
        <p>{props.currentUser.bio}</p>
      </RowThree>

      {/* <EditForm /> */}
    </Container>
  );
};

export default BioSide;
