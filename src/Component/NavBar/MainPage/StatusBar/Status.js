import { Paper } from '@mui/material'
import React, { Component } from 'react'
import uploadIcon from '../../../../images/images/upload.png'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'

class Status extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
   
  openDialog=(event)=>{
    let image = event.target.files[0];
    const thisContext = this
    if(image==undefined||image==null)
        return;
      const storage = getStorage();
      const storageRef = ref(storage, `/status/${image.name}`);
      
      const uploadTask = uploadBytesResumable(storageRef,image);
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
              "statusImageURL": downloadURL
          }

          const requestOptions ={
              method: "POST",
              headers: {'Content-Type':'application/json'},
              body : JSON.stringify(payload),
          };

          fetch("http://localhost:8080/api/statusService/save",requestOptions)
          .then(response => response.json())
          .then(data =>{

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
       {  this.props.uploader== "true" ? 
          <Paper className='statusbar_status'>
              <label htmlFor="status-upload" className='upload_tabs'>
              <img src={uploadIcon} className='upload_icon'/>
              </label>
              <input type="file" id="status-upload" onChange={(event)=>this.openDialog(event)}/>
          </Paper>
             :
          <Paper className='statusbar_status'>
                <img src={this.props.object.statusImageURL} className='status_image'/>
          </Paper>
        }
      </div>
    )
  }
}

export default Status