import './App.css';
import LoginHome from './Component/LoginHome/LoginHome';
import Layout from './Component/NavBar/MainPage/Layout';
import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import VideoPage from './Component/NavBar/VideoNavBar/VideoPage/VideoPage';
import MusicPage from './Component/NavBar/MusicPage/MusicPage';

import ChatHome from './Component/NavBar/ChatPage/ChatHome';
import Home from './Component/NavBar/ChatPage/Home';

function App() {
  return (
    <div className="App">
      {
         localStorage.getItem("user") == null ? <LoginHome/> : 
        
        <span> 
          <>
          <Routes>
            <Route exact path="/" element={<Layout/>}></Route>
            <Route path="/facebookvideos/*" element={<VideoPage/>}>
            </Route> 
            <Route path="/facebookmusic" element={<MusicPage/>}></Route> 
            <Route path="/facebookchat" element={<Home/>}></Route> 
          </Routes>
          <NavBar />
          </>
        </span>
      }
    </div>
  );
}

export default App;
