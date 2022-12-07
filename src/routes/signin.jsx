import React from 'react'
import { signInWithGooglePop, createUserDocFromAuth } from '../utils/utils';


const logGoogleUser = async () => {
  const { user } = await signInWithGooglePop();
  
  createUserDocFromAuth(user);
}

const SignIn = () => {
  return (
    <button className="dkfdf" onClick={logGoogleUser}>Click to sign up</button>
  )
}

export default SignIn