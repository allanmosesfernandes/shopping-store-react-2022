import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import {ReactComponent as CrwnLogo} from '../assets/crown.svg';
import { signInWithGooglePop } from '../utils/utils';




const logGoogleUser = async () => {
  const user = await signInWithGooglePop();
  console.log(user);
}

const Navigation = () => {
  return (
    <Fragment>
    <div className='navigation'>
      <Link className='logo-container' to="/">
        <CrwnLogo />
      </Link>
      
      <div className="nav-links-container">
        <Link className='nav-link' onClick={logGoogleUser} to='/sign-in'>Sign in</Link>
      </div>
      
    </div>
    <Outlet />
    </Fragment>
    
  )
}

export default Navigation