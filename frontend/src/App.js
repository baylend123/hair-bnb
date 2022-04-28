import './App.css';
import {useState} from 'react'
import { csrfFetch } from './store/csrf';
import Splash from './components/SplashComponent';
import StylistSignUp from './components/StylistSignUp'
import ProfilePage from './components/ProfilePage';
import SearchListPage from './components/SearchListPage'


import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/stylist-signup' element={<StylistSignUp />} />
      <Route path='/profile-page' element={<ProfilePage />} />
      <Route path='/search/:city/:state' element={<SearchListPage />} />
    </Routes>
  )
}

export default App;
