import React from 'react'
import { useState } from 'react'
import { createAuthUserFromEmailPasswor, createAuthUserFromEmailPassword } from '../../utils/utils'
const defaultFormfields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formfields, setFormFileds] = useState(defaultFormfields);
  const {displayName, email, password, confirmPassword} = formfields;
  

  const handleFormInput = (event) => {
    const {name, value} = event.target;
    setFormFileds({...formfields, [name]:value})
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords dont match")
      return;
    }

    try {
      const createResponse = await createAuthUserFromEmailPassword(email,password);
      console.log(createResponse)
    } catch (error) {
      console.log('error authenticating user', error.message)
    }
    /*     if (password === confirmPassword){
      const createResponse = await createAuthUserFromEmailPassword(email,password);
      console.log(createResponse)
    }return; */
  }
  return (
    <div>
      <h1>Sign up if you're a new user</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" required name='displayName' onChange={handleFormInput} value={displayName} /> 

        <label>Email</label>
        <input type="email" required name='email' onChange={handleFormInput} value={email} /> 

        <label>Password</label>
        <input type="password" required name='password' onChange={handleFormInput} value={password} /> 

        <label>Confirm Password</label>
        <input type="password" required name='confirmPassword' onChange={handleFormInput} value={confirmPassword} /> 

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm