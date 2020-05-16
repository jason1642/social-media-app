import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { verifyUser } from '../../Services/api-helper'

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

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.handleLogin(this.state);
        this.props.history.push('/');
      }}>
        <h3>Login</h3>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <Link to='/register'>register</Link>
        <input type="submit" />
      </form>



    )
  }
}
