import React, { useState } from 'react'
import './LoginPage.css'
import Logo from '../../resources/images/post-tree-logo.png'
import ImageSide from './ImageSide'
import styled from 'styled-components'
import MainSide from './MainSide'


const Container = styled.div`
  margin: 0 auto;
  padding: 8% 0;
  padding-bottom: 0;
  height: 100vh;
  /* border: 1px solid black; */
  /* width: 60%; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-repeat: not-repeat;
  background-image: url("https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
`



const LoginPage = props => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    name === 'username' ?
      setUsername(value) :
      name === 'password' ?
        setPassword(value) : console.log('nothing')
    console.log(username, password)
  }
  return (
    <Container className='login-page-container'>

      <ImageSide />
      <MainSide handleLogin={props.handleLogin} handleChange={handleChange} username={username} password={password} />

    </Container>
  )
}

export default LoginPage;


