import { Grid } from '@mui/material'
import React, { Component } from 'react'
import './MainPage.css'
import LeftSide from './LeftSide/LeftSide'
import UploadSection from'../MainPage/UploadSection/UploadSection'
import StatusBar from './StatusBar/StatusBar'
import PostContainer from './PostContainer/PostContainer'
import RightSide from './RightSide/RightSide'


class Layout extends Component {
     constructor(props){
        super(props)
        this.state={
             childRef : React.createRef() 
        }
     }


     letUpdate=()=>{
        this.state.childRef.current.getData();
     }

  render() {
    return (
        <div className='mainpage_container'>
            <Grid container>
                <Grid item xs={3}>
                    <LeftSide/>
                </Grid>
                <Grid item xs={6} className='middlecontainer'>
                    <StatusBar/>
                    <UploadSection update={this.letUpdate}/>     
                    <PostContainer ref={this.state.childRef}/>                 
                </Grid>
                <Grid item xs={3}>
                    <RightSide/>
                </Grid>
         </Grid>
        </div>
    )
  }
}

export default Layout