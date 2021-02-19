import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';
import './App.css'
import { Redirect, Route } from 'react-router-dom'
import Container from './components/Container/Container'
import SiteHeader from './components/SiteHeader/SiteHeader';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './Services/api-helper';

const App = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    confirmUser();
  }, [])

  const handleLogin = async (loginData) => {
    const currentUser1 = await loginUser(loginData);
    // console.log(currentUser1)
    setCurrentUser(currentUser1)
    return currentUser ? true : false;
  }

  const handleRegister = async (registerData) => {
    const currentUser1 = await registerUser(registerData);
    setCurrentUser(currentUser1)
  }

  const confirmUser = async () =>
    verifyUser().then(v => setCurrentUser(v))


  const handleLogout = () => {
    localStorage.clear();
    setCurrentUser(null)
    removeToken();
    // this.props.history.push('/login');
    window.location.reload()
    return <Redirect to='login' />
  }


  return (
    <div className="App">
      {
        currentUser &&
        <SiteHeader
          handleLogout={handleLogout}
          currentUser={currentUser}
        />
      }
      <Container
        currentUser={currentUser}
        handleRegister={handleRegister}
        handleLogin={handleLogin}
      />


    </div>
  )
}


export default withRouter(App);
