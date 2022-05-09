import './App.css';
import {useState} from 'react'
import { csrfFetch } from './store/csrf';
import Splash from './components/SplashComponent';
import StylistSignUp from './components/StylistSignUp'
import ProfilePage from './components/ProfilePage';
import SearchListPage from './components/SearchListPage';
import StylistProfilePage from './components/StylistProfilePage';
import InboxComponent from './components/InboxComponent';

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
      <Route path='/stylist/:id' element={<StylistProfilePage />} />
      <Route path='/inbox' element={<InboxComponent />} />
    </Routes>
  )
}

export default App;
