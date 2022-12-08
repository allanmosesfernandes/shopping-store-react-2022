import React from 'react'
import { useState } from 'react'

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

  return (
    <div>
      <h1>Sign up if you're a new user</h1>
      <form>
        <label>First Name</label>
        <input type="text" required name='displayName' onChange={handleFormInput} value={displayName} /> 

        <label>Email</label>
        <input type="email" required name='email' onChange={handleFormInput} value={email} /> 

        <label>Password</label>
        <input type="password" required name='password' onChange={handleFormInput} value={password} /> 

        <label>Confirm Password</label>
        <input type="password" required name='confirmPassword' onChange={handleFormInput} value={confirmPassword} /> 
      </form>
    </div>
  )
}

export default SignUpForm