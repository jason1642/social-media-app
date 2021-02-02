import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { verifyUser } from '../../Services/api-helper';
import './SiteHeader.css';
import logo from '../../resources/images/post-tree-logo-notext.png';
import DropDownContainer from './DropDownContainer.jsx';
const SiteHeader = (props) => {

  const [currentUser, setCurrentUser] = useState()



  useEffect(() => {
    const thisUser = verifyUser();
    setCurrentUser(thisUser)
    console.log(currentUser)
  }, [])
  console.log(props.currentUser)
  return (<>
    {
      currentUser ?

        <header>
          <div style={{ alignSelf: 'left', display: 'flex', justifyContent: 'center' }}>
            <Link className="header-logo" to='/'>
              <img className="header-logo" src={logo} alt='site logo' />
            </Link>

            <Link className='site-title' to='/'>Post Tree!</Link>
          </div>


          {/* <Link className='home-button' to="/">Home</Link> */}
          {/* <Link className='header-create-post-button' to="/posts/new">Create a post</Link> */}




          {/* <h3 className='welcome-text'>Hello, {this.state.currentUser.username}</h3>
            <Link className='logout-button'
              to='/profile'
            >My Profile</Link>

            <Link className='logout-button' onClick={this.props.handleLogout}>Logout</Link> */}

          <DropDownContainer handleLogout={props.handleLogout} />

        </header>

        :

        <></>

    }

  </>
  )

}


export default SiteHeader