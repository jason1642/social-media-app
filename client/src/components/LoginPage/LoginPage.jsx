import React, { Component, useState, useEffect } from 'react'
import { Link, Router } from 'react-router-dom'
import './LoginPage.css'
import Logo from '../../resources/images/post-tree-logo.png'

const Login = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    //  username/password : ''

    // console.log(e.target.name)


    const { name, value } = e.target;
    name == 'username' ?
      setUsername(value) :
      name == 'password' ?
        setPassword(value) : console.log('nothing')
    console.log(username)
    console.log(password)
  }
  return (
    <div className='login-page-container'>
      <img className="login-logo" src={Logo} alt='site logo' />
      <form className='login-form' onSubmit={async (e) => {
        e.preventDefault();
        let validLogin = false;
        props.handleLogin({ "username": username, "password": password });
        await console.log(props.handleLogin({ "username": username, "password": password }))

        // changes variable from false to true if user has valid log-in information
        props.handleLogin({ "username": username, "password": password }).then((value) => window.location.href = "/", (error) => alert("Error"))
        // if user if valid, take user to home page
        console.log(validLogin)
      }}>
        <h3>Sign in</h3>
        <label htmlFor="username"></label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder='Username'
        />
        <br />
        <br />
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder='Password'
        />
        <br />
        <button className='login-submit-button'>Log In</button>
      </form>


      <p>New to Post Tree?
        <Link to='/register' className='sign-up-here-link'> Sign up here</Link>
      </p>

    </div>
  )
}

export default Login;
