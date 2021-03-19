import React from 'react';
import styled from 'styled-components'


const Main = styled.div`
    border: 1px solid black;
    width: 30%;
    height: 100%;
    border-radius: 5px;
  `;
const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.4em;
    width: 100%;
    background-color: #3f3f8a;
    /* border-bottom: 1px solid black; */
    padding: 20px 0;
    color: white;
  `;


const SideBar = () => {

  return (
    <Main>
      <Title>About PostTree</Title>
      <p>Due to lack of moderation, there is no image sharing on this site.</p>
    </Main>

  )
}

export default SideBar