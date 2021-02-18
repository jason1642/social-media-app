import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SideBar = props => {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    min-height: 20px;
    max-height: 400px;
    border-radius: 5px;
    margin: 4% 0;
    margin-top: 120px;
    /* justify-content: space-between; */
    background-color: #a6c3a6;
  `;

  const Avatar = styled.img`
    height: 75px;
    width: 75px;
    border: 1px solid black;
    margin: 15px auto;
  `;


  return (
    <Container>
      {props.currentUser && <Avatar src={props.currentUser.image} alt={props.currentUser.image} />}
      <Link to="/profile/change_avatar">Change Avatar</Link>
    </Container>
  );
}

export default SideBar;