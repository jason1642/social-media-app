import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Header = styled.div`
  margin-bottom: 0em;
  height: 100%;
  width: 175px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  color: white;
`;
const ProfilePicture = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const ImageContainer = styled.div`
  /* border: 1px solid black; */
  width: 40px;
  border-radius: 50%;
`;
const UsernameContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  width: 60%;
  padding: 0 10px;
  text-align: left;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
`;

const DropHeader = (props) => {
  return (
    <Header>
      <ImageContainer>
        <ProfilePicture src={props.currentUser.image} alt="profile pic" />
      </ImageContainer>
      <UsernameContainer>{props.currentUser.username}</UsernameContainer>
      <div>
        <Icon icon={faAngleDown} />
      </div>
    </Header>
  );
};
export default DropHeader;
