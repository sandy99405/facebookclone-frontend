import React, { Component } from 'react'
import VideoNav from '../VideoNav'
import { Route, Routes } from 'react-router-dom'
import VideoHome from '../VideoHome/VideoHome'
import VideoLibrary from '../VideoLib/VideoLibrary'
import { Grid } from '@mui/material'
import '../VideoNav.css'

class VideoPage extends Component {

    render() {
    return (
      <div>
         <>
         <Grid container spacing={4}>
           <Grid item xs={9}>
           <Routes>
                <Route path="/" element={<VideoHome/>}></Route> 
                <Route path="/library" element={<VideoLibrary/>}></Route>
              </Routes>
           </Grid>
           <Grid item xs={3}>
                <VideoNav/>
           </Grid>
          </Grid>
         </>
      </div>
    )
  }
}

export default VideoPage