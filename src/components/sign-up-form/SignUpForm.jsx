import React from 'react'
import { useState } from 'react'
import { createUserDocFromAuth, createAuthUserFromEmailPassword } from '../../utils/utils'
import FormInput from '../formInput/formInput'
import Button from '../button/button'
const defaultFormfields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {

  const [formfields, setFormFileds] = useState(defaultFormfields);
  const {displayName, email, password, confirmPassword} = formfields;
  
//==Handle Form Input, so everytime form input changes add it to state
  const handleFormInput = (event) => {
    const {name, value} = event.target;
    setFormFileds({...formfields, [name]:value})
  }

//==Rest Form Field 
  const resetFormFields = () => {
    setFormFileds(defaultFormfields)
  }

//==Handle Submit tied to firebase authentication
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords dont match")
      return;
    }

    try {
      const {user} = await createAuthUserFromEmailPassword(email,password);
      await createUserDocFromAuth(user, {displayName});
      resetFormFields();
    } catch (error) {
      console.log('error authenticating user', error.message)
    }
    
  }
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account? </h2>
      <span>Sign up if you're a new user</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="displayName"
          label="Display Name" 
          type="text" 
          required 
          onChange={handleFormInput} 
          value={displayName}
          />

        <FormInput
          name="email"
          label="Email"
          type="email"
          required
          onChange={handleFormInput} 
          value={email}
        />

        <FormInput
          name="password"
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleFormInput} 
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          onChange={handleFormInput} 
          value={confirmPassword}
        />
        <Button type="submit" text="Sign up" buttonType="google"/>
        {/* <button type='submit'>Sign Up</button> */}
      </form>
    </div>
  )
}

export default SignUpForm