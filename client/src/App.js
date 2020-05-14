import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './App.css'
import Container from './components/Container/Container'
import Header from './components/Header/Header';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './Services/api-helper';

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.confirmUser();
    console.log(this.state.currentUser)
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
  }

  confirmUser = async () => {
    const currentUser1 = await verifyUser();
    this.setState({ currentUser1 })
  }

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null
    })
    removeToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        {console.log(this.state.currentUser)}
        <Container
          currentUser={this.state.currentUser}
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
        />


      </div>
    )
  }
}

export default withRouter(App);
