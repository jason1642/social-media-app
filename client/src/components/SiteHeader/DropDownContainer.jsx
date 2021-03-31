import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropHeader from "./DropHeader";

const Container = styled("div")`
  height: inherit;
  &:hover {
    cursor: pointer;
  }
`;
const DropDownListContainer = styled("div")`
  height: 100%;
  width: 100%;
  background-color: rgb(68, 68, 68);
`;
const DropDownLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  height: 100%;
  color: white;
  padding-bottom: 0.9em;
  padding-top: 0.9em;
  font-size: 14px;
  background-color: rgb(68, 68, 68);

  /* margin-bottom: 0.8em; */
  &:hover {
    background-color: #9ca8f0;
  }
  &:last-child {
    &:hover {
      border-radius: 0 0 15px 15px;
      background-color: #9ca8f0;
    }
  }
`;
const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  background: #ffffff;
  border: none;
  border-radius: 0 0 15px 15px;
  box-sizing: border-box;
  color: white;
  background-color: #ffffff;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  background-color: rgb(68, 68, 68);

  &:first-child {
    /* padding-top: 0.8em; */
  }
`;

const DropDownContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <Container onClick={toggling}>
      <DropHeader currentUser={props.currentUser} />
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            <DropDownLink to="/profile">Profile</DropDownLink>
            <DropDownLink onClick={props.handleLogout}>Logout</DropDownLink>
          </DropDownList>
        </DropDownListContainer>
      )}
    </Container>
  );
};
export default DropDownContainer;
