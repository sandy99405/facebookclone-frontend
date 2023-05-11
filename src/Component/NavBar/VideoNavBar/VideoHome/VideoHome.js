import React, { Component } from 'react'
import './VideoHome.css'
import VideoPost from './VideoPost'

class VideoHome extends Component {
  render() {
    return (
      <div className='video_library'>        
                <div className='player_wrapper'>
                     <VideoPost/>
                     <VideoPost/>
                     <VideoPost/>
                     <VideoPost/>
                     <VideoPost/>
                     <VideoPost/>
                     <VideoPost/>
                     <VideoPost/>
                </div>
      </div>
    )
  }
}

export default VideoHome