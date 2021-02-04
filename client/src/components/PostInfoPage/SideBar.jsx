import React from 'react';
import styled from 'styled-components'

const SideBar = () => {

  const Main = styled.div`
    border: 1px solid black;
    width: 30%;
    height: 100%;
    border-radius: 5px;
  `;
  const Title = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.4em;
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
  `;
  return (
    <Main>
      <Title>About PostTree</Title>
      <p>Due to lack of moderation, there is no image sharing on this site.</p>
    </Main>

  )
}

export default SideBar