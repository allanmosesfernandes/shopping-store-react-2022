import React from 'react'
import { signInWithGooglePop, createUserDocFromAuth } from '../utils/utils';
import SignUpForm from '../components/sign-up-form/SignUpForm';
import SignInEmailPassword from "../components/sign-up-email-pass/SignInEmailPassword"


const SignIn = () => {
  const goo = async () => {
  const { user } = await signInWithGooglePop();
  console.log(user)
  createUserDocFromAuth(user);
}
  return (
    <div className="authentication-container">
      <SignUpForm />
      <button onClick={goo}>Sign up using Google</button>
      <SignInEmailPassword/> 
    </div>
  )
}

export default SignIn