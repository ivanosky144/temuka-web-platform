import React, { useContext } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Friends from './pages/Friends'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import Universities from './pages/Universities'
import CommunityPage from './pages/CommunityPage'
import UniversityDetail from './pages/UniversityDetail'

const App:React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={userInfo?.isLoggedIn ? <Home /> : <Login />}/>  */}
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />}/>
        <Route path='/university' element={<Universities />}/>
        <Route path='/university/:slug' element={<UniversityDetail />}/>
        <Route path='/community/:id' element={<CommunityPage />} />
        <Route path='/profile/:id' element={<Profile />}/>
        <Route path='/friends/:id' element={<Friends />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
