import { Home, VideoLibrary} from '@mui/icons-material'

import { NavLink } from 'react-router-dom'
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import './VideoNav.css'
import PlayCircleSharpIcon from '@mui/icons-material/PlayCircleSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';


import React from 'react'

function VideoNav() {
  return (
    <div className='videobar_main'>
                        <nav>
                        <div className='videobar_container'>
                            <div className="videobar_tabs active">
                            <NavLink to="" > <Home/></NavLink>
                            </div>
                            <div className="videobar_tabs">
                            <NavLink to="/facebookvideos" > <PlayCircleSharpIcon/> </NavLink>
                            </div>
                            <div className="videobar_tabs">
                            <NavLink to="/facebookvideos" > <MusicNoteSharpIcon/></NavLink>
                            </div>
                            <div className="videobar_tabs">
                            <NavLink to="library"> <VideoLibrary/> </NavLink>
                            </div>
                            <div className="videobar_tabs">
                            <NavLink to="library"> <PersonOutlineSharpIcon/> </NavLink>
                            </div>
                        </div>
                        </nav>
    </div>
  )
}

export default VideoNav


