import React from 'react'
import { useState } from 'react'
import { 
  createUserDocFromAuth, 
  createAuthUserFromEmailPassword,
  signInWithFirebaseEmailPassword
} from '../../utils/utils'
import FormInput from '../formInput/formInput'
import Button from '../button/button'
const defaultFormfields = {
  email: '',
  password: '',
}
const SignInEmailPassword = () => {

  const [formfields, setFormFileds] = useState(defaultFormfields);
  const {email, password} = formfields;
  
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

    try {
       const {user} = await signInWithFirebaseEmailPassword(email,password);
       console.log(user)
       resetFormFields();
    } catch (error) {
      alert("error authenticating user" +error.message);
    }
    
  }
  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in using email and password</span>
      <form onSubmit={handleSubmit}>
       

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


        <Button type="submit" text="Sign In" buttonType="inverted"/>
        {/* <button type='submit'>Sign Up</button> */}
      </form>
    </div>
  )
}

export default SignInEmailPassword