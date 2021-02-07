import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { verifyUser } from '../../Services/api-helper';
import './SiteHeader.css';
import logo from '../../resources/images/post-tree-logo-notext.png';
import DropDownContainer from './DropDownContainer.jsx';
const SiteHeader = (props) => {

  const [currentUser, setCurrentUser] = useState()

  const setUser = async () => {
    const thisUser = await verifyUser();
    setCurrentUser(thisUser)
  }

  useEffect(() => {
    setUser()
  }, [])
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

          <DropDownContainer currentUser={props.currentUser} handleLogout={props.handleLogout} />

        </header>

        :

        <></>

    }

  </>
  )

}


export default SiteHeader