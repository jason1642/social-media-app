import React, { useState, useEffect } from 'react'
import { Link, Router } from 'react-router-dom'
import './LoginPage.css'
import Logo from '../../resources/images/post-tree-logo.png'

const LoginPage = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {

    const { name, value } = e.target;
    name === 'username' ?
      setUsername(value) :
      name === 'password' ?
        setPassword(value) : console.log('nothing')

  }




  return (
    <div className='login-page-container'>
      <img className="login-logo" src={Logo} alt='site logo' />
      <form className='login-form' onSubmit={async (e) => {
        e.preventDefault();
        // await props.handleLogin({ "username": username, "password": password });
        // console.log(props.handleLogin({ "username": username, "password": password }))
        console.log(props)
        // changes variable from false to true if user has valid log-in information
        await props.handleLogin({ "username": username, "password": password }).then((value) => window.location.href = "/", (error) => alert("Error"))
        // if user if valid, take user to home page
      }}>
        <h3>Log in</h3>
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


      <p>
        New to Post Tree?
        <Link to='/register' className='sign-up-here-link'> Sign up here</Link>
      </p>

    </div>
  )
}

export default LoginPage;
