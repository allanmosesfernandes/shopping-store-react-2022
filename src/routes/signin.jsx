import React from 'react'
import { signInWithGooglePop, createUserDocFromAuth } from '../utils/utils';
import SignUpForm from '../components/sign-up-form/SignUpForm';

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePop();
  console.log(user)
  createUserDocFromAuth(user);
}

const SignIn = () => {
  return (
    <>
        <button className="dkfdf" onClick={logGoogleUser}>Click to sign up</button>
      <SignUpForm />
    </>

  )
}

export default SignIn