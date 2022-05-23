import './App.css';
import { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { restoreUser } from './store/session';
import Splash from './components/SplashComponent';
import StylistSignUp from './components/StylistSignUp'
import ProfilePage from './components/ProfilePage';
import SearchListPage from './components/SearchListPage';
import StylistProfilePage from './components/StylistProfilePage';
import InboxComponent from './components/InboxComponent';
import ProfileEditPage from './components/ProfileEditPage';



import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={isLoaded && <Splash />} />
      <Route path='/stylist-signup' element={isLoaded && <StylistSignUp />} />
      <Route path='/profile-page' element={isLoaded && <ProfilePage />} />
      <Route path='/search/:city/:state' element={isLoaded && <SearchListPage />} />
      <Route path='/stylist/:id' element={isLoaded && <StylistProfilePage />} />
      <Route path='/inbox' element={isLoaded && <InboxComponent />} />
      <Route path='/user/edit' element={<ProfileEditPage />} />
    </Routes>
  )
}

export default App;
