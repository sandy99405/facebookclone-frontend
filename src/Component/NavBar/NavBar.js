import { Home } from '@mui/icons-material'
import { Avatar, AvatarGroup, Grid } from '@mui/material'
import React, { Component } from 'react'
import fblogo from '../../images/images/logo.png'
import PlayCircleSharpIcon from '@mui/icons-material/PlayCircleSharp';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';
import MarkChatUnreadSharpIcon from '@mui/icons-material/MarkChatUnreadSharp';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={
            newMessage:"false"
        }
    }
  render() {
    return (
      <div>  
            <Grid className='navbar_main' container>
                    <Grid item xs={3}>
                          <div className='navbar_leftbar'>
                              <img src={fblogo} width="40px" className='navbar_logo'/>
                              <input className='navbar_search' type="text" placeholder='Search Facebook'/>
                          </div>
                    </Grid>
                    <Grid item xs={6}>
                        <nav>
                        <div className='navbar_container'>
                            <div className="navbar_tabs">
                                <NavLink to="/" >   <Home/> </NavLink>
                            </div>
                            <div className="navbar_tabs">
                                <NavLink to="/facebookvideos" > <PlayCircleSharpIcon/> </NavLink>
                            </div>
                            <div className="navbar_tabs">
                            <NavLink to="/facebookmusic"> <MusicNoteSharpIcon/></NavLink>
                            </div>
                            <div className="navbar_tabs">
                            <NavLink to="/facebookchat" > <MarkChatUnreadSharpIcon/> </NavLink>
                            </div>
                        </div>
                        </nav>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="navbar_righttab">
                            <div>
                              <Avatar className='navbar_rightimg' src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__480.jpg"/>
                            </div>
                            <div className='navbar_profilename'>
                               Sandilya
                            </div> 
                        </div>
                    </Grid>
            </Grid>
      </div>
    )
  }
}

export default NavBar