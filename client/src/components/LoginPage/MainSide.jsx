import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../resources/images/post-tree-logo.png'

const Container = styled.div`
`

// Main is the right side that includes the form
const Main = styled.div`
  /* width: 50%; */
  margin: 0px auto;
  border: 1px solid #b4b4b4;
  padding: 15px 40px;
  background-color: rgba(var(--d87,255,255,255),1);
  border-radius: 1px;

`
const ImageLogo = styled.img`
  height: 200px;
  width: auto;
  /* margin-top: 14px; */
`
const Form = styled.form`
  margin: 0 auto;
`
const Title = styled.h3`
  font-size: 2.4em;

`
const RegisterLinkBox = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-radius: 1px;
  background-color: white;
  border: 1px solid #b4b4b4;


`
const Button = styled.button`
  color: white;
  background-color: #0079d3;
  border: none;
  margin: 10px 0;
  font-size: 1.2em;
  padding: 10px 50px;
  border-radius: 15px;
  cursor: pointer;
`

const MainSide = props => {
  return (
    <Container>
      <Main>
        <ImageLogo className="login-logo" src={Logo} alt='site logo' />
        <Form className='login-form' onSubmit={async (e) => {
          e.preventDefault();
          // await props.handleLogin({ "username": username, "password": password });
          // console.log(props.handleLogin({ "username": username, "password": password }))
          console.log(props)
          // changes variable from false to true if user has valid log-in information
          await props.handleLogin({ "username": props.username, "password": props.password }).then((value) => window.location.href = "/", (error) => alert("Error"))
          // if user if valid, take user to home page
        }}>
          {/* <Title>Log in</Title> */}
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            name="username"
            value={props.username}
            onChange={props.handleChange}
            placeholder='Username'
          />
          <br />
          <br />
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            value={props.password}
            onChange={props.handleChange}
            placeholder='Password'
          />
          <br />
          <Button>Log In</Button>
        </Form>
        <p>Guest Login - User: tester | Password: abc123</p>


      </Main>
      <RegisterLinkBox>
        New to Post Tree?
        <Link to='/register' className='sign-up-here-link'> Sign up here</Link>
      </RegisterLinkBox>
    </Container>

  );
}

export default MainSide;