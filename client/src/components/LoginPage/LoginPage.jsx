import React, { Component } from 'react'

import './LoginPage.css'
export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, password } = this.state;

    return (
      <>
        <img className="login-logo" src='https://www.pngitem.com/pimgs/m/543-5439153_transparent-javascript-icon-png-reddit-logo-hd-png.png' alt='site logo' />
        <form className='login-form' onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state)
          this.props.handleLogin(this.state);
          this.props.history.push('/');
        }}>
          <h3>Sign in</h3>
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            placeholder='Password'
          />
          <br />
          <button className='login-submit-button'>Sign In</button>
        </form>
      </>


    )
  }
}
