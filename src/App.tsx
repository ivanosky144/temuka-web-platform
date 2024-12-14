import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Universities from './pages/Universities';
import CommunityPage from './pages/CommunityDetail';
import UniversityDetail from './pages/UniversityDetail';
import Submit from './pages/Submit';
import Post from './pages/Post';
import Communities from './pages/Communities';
import RouteWrapper from './components/RouteWrapper';
import CommunitySubmit from './pages/CommunitySubmit';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <RouteWrapper type="public">
              <Login />
            </RouteWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <RouteWrapper type="public">
              <Register />
            </RouteWrapper>
          }
        />

        <Route
          path="/"
          element={
            <RouteWrapper type="protected">
              <Home />
            </RouteWrapper>
          }
        />
        <Route
          path="/submit"
          element={
            <RouteWrapper type="protected">
              <Submit />
            </RouteWrapper>
          }
        />
        <Route
          path="/community/:slug/submit"
          element={
            <RouteWrapper type="protected">
              <CommunitySubmit />
            </RouteWrapper>
          }
        />
        <Route
          path="/post/:id"
          element={
            <RouteWrapper type="protected">
              <Post />
            </RouteWrapper>
          }
        />
        <Route
          path="/universities"
          element={
            <RouteWrapper type="protected">
              <Universities />
            </RouteWrapper>
          }
        />
        <Route
          path="/university/:slug"
          element={
            <RouteWrapper type="protected">
              <UniversityDetail />
            </RouteWrapper>
          }
        />
        <Route
          path="/communities"
          element={
            <RouteWrapper type="protected">
              <Communities />
            </RouteWrapper>
          }
        />
        <Route
          path="/community/:slug"
          element={
            <RouteWrapper type="protected">
              <CommunityPage />
            </RouteWrapper>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <RouteWrapper type="protected">
              <Profile />
            </RouteWrapper>
          }
        />
        <Route
          path="/settings"
          element={
            <RouteWrapper type="protected">
              <Settings />
            </RouteWrapper>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
