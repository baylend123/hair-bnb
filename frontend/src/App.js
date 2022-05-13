import './App.css';
import {useState} from 'react'
import { csrfFetch } from './store/csrf';
import Splash from './components/SplashComponent';
import StylistSignUp from './components/StylistSignUp'
import ProfilePage from './components/ProfilePage';
import SearchListPage from './components/SearchListPage';
import StylistProfilePage from './components/StylistProfilePage';
import StylistEditPage from './components/StylistEditPage';


import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/stylist-signup' element={<StylistSignUp />} />
      <Route path='/user/:id' element={<ProfilePage />} />
      <Route path='/search/:city/:state' element={<SearchListPage />} />
      <Route path='/stylist/:id' element={<StylistProfilePage />} />
      <Route path='/stylist/edit' element={<StylistEditPage />} />
    </Routes>
  )
}

export default App;
