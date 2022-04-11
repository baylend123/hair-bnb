import './App.css';
import {useState} from 'react'
import { csrfFetch } from './store/csrf';
import Splash from './components/SplashComponent';

function App() {
  return (
    <Splash />
  )
}

export default App;
