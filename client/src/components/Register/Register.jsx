import React,
{
  Component
}

  from 'react'
import './Register.css'

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const {
      name,
      value
    }

      = e.target;

    this.setState({
      [name]: value
    }

    );
  }

  render() {
    const {
      username,
      email,
      password
    }

      = this.state;

    return (<form className='register-form' onSubmit={
      (e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        this.props.history.push('/');

      }
    }

    > <h3 className='login-form-title'>Create an account</h3> <label htmlFor="username"></label> <input id="username"
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
        name="email"

        value={
          email
        }

        onChange={
          this.handleChange
        }

        placeholder='Email'
      /> <br /> <label htmlFor="password"></label> <input id="password"
        type="password"
        name="password"

        value={
          password
        }

        onChange={
          this.handleChange
        }

        placeholder='Password'
      /> <br /> <button className='login-submit-button'>Create</button> </form >)
  }
}