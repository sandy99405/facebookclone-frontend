import { Avatar, Dialog, Paper } from '@mui/material'
import React, { Component } from 'react'
import './UploadSection.css'
import live from '../../../../images/images/video.png'
import image from '../../../../images/images/image.png'
import feeling from '../../../../images/images/feelings.png'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'

class UploadSection extends Component {
  constructor(props){
      super(props)
      this.state={
          open:false,
          uploadImage:null,
          image:null,
          description:" "
      }


  }

    handleClose=()=>{
        this.setState({open:false})
    }

    openDialog=(event)=>{
        this.setState({open:true})
        this.setState({uploadImage: URL.createObjectURL(event.target.files[0])});
        this.setState({image:event.target.files[0]})
    }


    uploadToFirebase=(event)=>{
      const thisContext = this
      const storage = getStorage();
      const storageRef = ref(storage, `/files/${this.state.image.name}`);
      
      const uploadTask = uploadBytesResumable(storageRef, this.state.image);
      uploadTask.on('state_changed', 
        (snapshot) => {
          
        }, 
        (error) => {
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            let payload = {
              "userID" : JSON.parse(localStorage.getItem("user")).uid,
              "userName": JSON.parse(localStorage.getItem("user")).userName,
              "description": thisContext.state.description,
              "postImgURL": downloadURL
          }

          const requestOptions ={
              method: "POST",
              headers: {'Content-Type':'application/json'},
              body : JSON.stringify(payload),
          };

          fetch("http://localhost:8080/api/postService/save",requestOptions)
          .then(response => response.json())
          .then(data =>{
              thisContext.setState({
                  open:false
              })
              thisContext.props.update();
          })
          .catch(error =>{

          })
          });
        }
      );
    }

  render() {
    return (
      <div>
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" className='upload_dialogbox' open={this.state.open}>
          <div className='upload_header' >Create Post</div>
            <input  onChange={(event)=>(this.setState({description : event.currentTarget.value}))} type='text' className='upload_textbox' placeholder="What's on your mind?"/>
            <img src={this.state.uploadImage} className='upload_preview' alt=''/>
            <input type="button" value="Post" onClick={(event)=>this.uploadToFirebase(event)} className='upload_button'/>
         </Dialog>
        <Paper className='upload_container'>
        <div className='upload_top'>
            <div>
                <Avatar src="" className="upload_img" />
            </div>
            <div>
                <input className='upload_box' placeholder="What's on your mind?" type="text"/>
            </div>
        </div>
        <div className='upload_footer'>
            <div className='upload_tabs'>
               <img src={live} width="30px" alt=''/>
               <div className='upload_text'>Live Video</div>
            </div>
            <div className='upload_tabs'>
              <label htmlFor="file-upload" className='upload_tabs'>
              <img src={image} width="30px" alt=''/>
               <div className='upload_text'>Photo/Video</div>
              </label>
              <input type="file" id="file-upload" onChange={(event)=>this.openDialog(event)}/>
            </div>
            <div className='upload_tabs'>
               <img src={feeling} width="30px" alt=''/>
               <div className='upload_text'>Feeling/Activity</div>
            </div>
        </div>
        </Paper>
      </div>
    )
  }
}

export default UploadSection