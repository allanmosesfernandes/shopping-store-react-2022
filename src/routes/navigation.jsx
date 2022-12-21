import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext, UseContext } from 'react'
import {ReactComponent as CrwnLogo} from '../assets/crown.svg';
import SignIn from './signin';
import { UserContext } from '../context/userContext';
const Navigation = () => {

  const {currentUser} = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
    <div className='navigation'>
      <Link className='logo-container' to="/">
        <CrwnLogo />
      </Link>
      
      <div className="nav-links-container">
        <Link className='nav-link' to='/sign-in'>Sign in</Link>
      </div>
      
    </div>
    <Outlet />
    </Fragment>
    
  )
}

export default Navigation