import React, { Component } from 'react'
import Post from './Post'
import axios from 'axios'

class PostContainer extends Component {
    constructor(props){
        super(props)
        this.state={
              data : []
        }
    }

    handleDelete=(postID)=>{
        axios.delete("http://localhost:8080/api/postService/delete/"+postID)
        .then()
        .then()
        .catch(error =>{
            
        })
    }

     getData=()=>{
        /* let json=[
            {
                "postID" : 1,
                "user_id" : 1234567,
                "user_img" : "url....",
                "user_name": "Sandilya",
                "description": "Loved this wallpaper",
                "post_img" : "url of the image",
                "like":"25"
            },
            {
                "postID" : 2,
                "user_id" : 1234567,
                "user_img" : "url....",
                "user_name" : "Sandilya2",
                "description" : "Loved this wallpaper",
                "post_img" : "url of the image",
                "like":"25"
            }
        ];
 */
        const thisContext=this;
        fetch("http://localhost:8080/api/postService/getPost")
        .then(response=>response.json())
        .then(json =>{
            thisContext.setState({data:json})
        })
        .catch(error => {
                
        })

    }

    componentDidMount(){
        this.getData();
    }

  render() {
    return (
      <div>
            {
                  this.state.data.map((item,index)=>(
                      <Post key={index} object={item} handleDelete={this.handleDelete}/>
                  ))
            }
      </div>
    )
  }
}

export default PostContainer