import './App.css';
import './assets/categories.styles.scss';
import React from 'react'
import Home from './routes/homepage';
import Navigation from './routes/navigation';
import {Routes, Route} from 'react-router-dom';
import SignIn from './routes/signin';

const App = () => {
  
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>} />
      <Route index path='sign-in' element={<SignIn />} />
    </Route>
  </Routes>
  
  )
}

export default App