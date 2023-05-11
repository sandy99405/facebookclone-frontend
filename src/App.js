import './App.css';
import LoginHome from './Component/LoginHome/LoginHome';
import Layout from './Component/NavBar/MainPage/Layout';
import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import VideoPage from './Component/NavBar/VideoNavBar/VideoPage/VideoPage';
import MusicPage from './Component/NavBar/MusicPage/MusicPage';
import ChatPage from './Component/NavBar/ChatPage/ChatPage';

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
               {/*  <Route path='/facebookvideos/library'/> */}
            </Route> 
            <Route path="/facebookmusic" element={<MusicPage/>}></Route> 
            <Route path="/facebookchat" element={<ChatPage/>}></Route> 
          </Routes>
          <NavBar />
          </>
        </span>
      }
    </div>
  );
}

export default App;
