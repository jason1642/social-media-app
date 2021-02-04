import React from 'react';
import styled from 'styled-components'



const Content = props => {

  const Container = styled.div`
    width: 100%;
    min-height: 100px;
    max-height: 118px;
    margin: 10px 0;
    background-color: white;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    &:hover{
      box-shadow: 0 6px 16px 0 #acacac;
      transition: box-shadow .5s;
      cursor: pointer;
    }
  `;
  const Main = styled.div`
display: flex;
width: 100%;
margin: 1px 8px;
padding-top: 8px;
justify-content: space-between;
flex-direction: column;
& > div{
  width: 100%;
  /* border: 1px solid black; */
  text-align: left;
}
`
  const UsernameRow = styled.div`
  
  `;
  const UpvoteSide = styled.div`
  border-right: .5px solid black;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
  console.log(props)
  return (
    <Container>
      <UpvoteSide>
        UP
      </UpvoteSide>
      <Main>
        <UsernameRow>
          Posted by: {props.postData.user.username}
          {'created x days ago'}
        </UsernameRow>
      </Main>
    </Container>
  );
}

export default Content;