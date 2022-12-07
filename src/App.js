import './App.css';
import './assets/categories.styles.scss';
import React from 'react'
import Home from './routes/homepage';
import Navigation from './routes/navigation';
import {Routes, Route} from 'react-router-dom';

const Shop = () => {
  return (
    <div>Shop</div>
  )
}

const App = () => {
  
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index path='shop' element={<Shop />} />
    </Route>
  </Routes>
  
  )
}

export default App