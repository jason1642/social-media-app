import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import Logo from '../../resources/images/post-tree-logo.png'


export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    }
    );
  }

  render() {
    const { username, email, password } = this.state;

    return (
      <div>
        <img className="login-logo" src={Logo} alt='site logo' />
        <form className='register-form' onSubmit={
          (e) => {
            e.preventDefault();
            this.props.handleRegister(this.state);
            this.props.history.push('/');
            window.location.reload()

          }
        }> <h3>Sign up</h3> <label htmlFor="username"></label> <input id="username"
          type="text"
          name="username"
          value={
            username
          }
          onChange={
            this.handleChange
          }
          placeholder='Username'
          /> <br /> <label htmlFor="email"></label> <input id="email"
            type="text"
            name="email" value={email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <br />
          <label htmlFor="password"></label> <input id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
          /> <br /> <button className='login-submit-button'>Create</button>

        </form >
        <p>Already have an account?
        <Link to='/login' className='sign-up-here-link'> Log in here</Link>
        </p>
      </div >

    )
  }
}