import { Avatar, Grid } from '@mui/material'
import React, { Component } from 'react'
import './VideoHome.css'

class VideoPost extends Component {
  render() {
    return (
      <div>
        <Grid container>
               <Grid item xs={4}>
               <div className='videohome_div'>
                  <video width="90%" height="1%" controls className='videohome_container'>
                      <source src="https://firebasestorage.googleapis.com/v0/b/facebook-clone2-26e8f.appspot.com/o/files%2FWIN_20201010_08_45_22_Pro.mp4?alt=media&token=098462a6-a409-4b75-9ef0-993f48d3d7fc" type="video/mp4"/>
                  </video>
                  <div className='videohome_detailsdiv'>
                  <Avatar className='videohome_channelicon'/>
                  <h2 className='video_title'>Sandy released a new video</h2>
                  </div>
                  </div>
               </Grid>
               <Grid item xs={4}>
               <div className='videohome_div'>
                  <video width="90%" height="1%" controls className='videohome_container'>
                      <source src="https://firebasestorage.googleapis.com/v0/b/facebook-clone2-26e8f.appspot.com/o/files%2FWIN_20201010_08_45_22_Pro.mp4?alt=media&token=098462a6-a409-4b75-9ef0-993f48d3d7fc" type="video/mp4"/>
                  </video>
                  <div className='videohome_detailsdiv'>
                  <Avatar className='videohome_channelicon'/>
                  <h2 className='video_title'>Sandy released a new video</h2>
                  </div>
                  </div>
               </Grid>
               <Grid item xs={4}>
               <div className='videohome_div'>
                  <video width="90%" height="1%" controls className='videohome_container'>
                      <source src="https://firebasestorage.googleapis.com/v0/b/facebook-clone2-26e8f.appspot.com/o/files%2FWIN_20201010_08_45_22_Pro.mp4?alt=media&token=098462a6-a409-4b75-9ef0-993f48d3d7fc" type="video/mp4"/>
                  </video>
                  <div className='videohome_detailsdiv'>
                  <Avatar className='videohome_channelicon'/>
                  <h2 className='video_title'>Sandy released a new video</h2>
                  </div>
                  </div>
               </Grid>
          </Grid>
      </div>
    )
  }
}

export default VideoPost