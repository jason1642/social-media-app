import React from 'react';
import styled from 'styled-components'

const SideBar = () => {

  const Main = styled.div`
    border: 1px solid black;
    width: 30%;
    height: 100%;
  `;
  const Title = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.4em;
  `;
  return (
    <Main>
      <Title>About PostTree</Title>
    </Main>

  )
}

export default SideBar