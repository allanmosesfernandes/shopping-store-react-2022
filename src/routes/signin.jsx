import React from 'react'
import { signInWithGooglePop, createUserDocFromAuth } from '../utils/utils';
import SignUpForm from '../components/sign-up-form/SignUpForm';
import SignInEmailPassword from "../components/sign-up-email-pass/SignInEmailPassword"

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePop();
  console.log(user)
  createUserDocFromAuth(user);
}

const SignIn = () => {
  return (
    <>
      <SignUpForm />
      <SignInEmailPassword />
    </>

  )
}

export default SignIn