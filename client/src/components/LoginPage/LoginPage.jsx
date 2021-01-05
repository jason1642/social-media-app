import React, { Component, useState, useEffect } from 'react'
import './LoginPage.css'


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
    <>
      <img className="login-logo" src='https://www.pngitem.com/pimgs/m/543-5439153_transparent-javascript-icon-png-reddit-logo-hd-png.png' alt='site logo' />
      <form className='login-form' onSubmit={(e) => {
        e.preventDefault();
        let validLogin = false;
        props.handleLogin({ "username": username, "password": password });
        console.log(props.handleLogin({ "username": username, "password": password }))

        // changes variable from false to true if user has valid log-in information
        props.handleLogin({ "username": username, "password": password }) !== false ? validLogin = true : validLogin = false;
        // if user if valid, take user to home page
        console.log(validLogin)
        validLogin == true ? props.history.push('/') : alert('not valid log-in information');
        // refresh to show changes to interface
        // window.location.reload();
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
        <button className='login-submit-button'>Sign In</button>
      </form>
    </>
  )
}

export default Login;
