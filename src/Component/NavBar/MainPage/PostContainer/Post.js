import { Avatar, IconButton, Menu, MenuItem, Paper } from '@mui/material'
import React, { Component } from 'react'
import './PostContainer.css'
import fblogo from '../../../../images/images/logo.png'
import like from '../../../../images/images/like.png'
import likebutton from '../../../../images/images/likebutton.png'
import commentbutton from '../../../../images/images/comment.png'
import sharebutton from '../../../../images/images/share.png'
import { MoreVert } from '@mui/icons-material'

const ITEM_HEIGHT = 48

class Post extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }


    isImageAvailable(data){
        return data=""? false:true;
    }
    
    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
      };
       
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      handleDelete = () =>{
          const {handleDelete} = this.props
          handleDelete(this.props.object.postID);
          window.location.reload();
      }

  render() {
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
         <Paper className="post_container">
            <div className='post_header'>
                <div className='post_header_img'>
                    <Avatar src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__480.jpg" className='post_upper_img'/>
                 </div>
                 <div className='post_header_text'>
                     {this.props.object.userName}
                 </div>
                 <div className='post_options'>
                 <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={(event)=>this.handleClick(event)}
                >
                    <MoreVert/>
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    "aria-labelledby": "long-button"
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT*4.5,
                        width: "20ch"
                    }
                    }}
                >
                    <MenuItem  onClick={this.handleClose}>
                         <button onClick={this.handleDelete}>Delete</button>
                    </MenuItem>
                    <MenuItem  onClick={this.handleClose}>
                         <button >Delete2</button>
                    </MenuItem>
                </Menu>
                 </div>
            </div>
            <div className='post_description'>
                {this.props.object.description}
            </div>
            <div className='post_image'>
                {
                  this.isImageAvailable(this.props.object.postImgURL) ? <img width="600px" src={this.props.object.postImgURL}/> : <span></span>
                }
            </div>
            <div className='post_likeCountContainer'>
                  <div className='post_like'>
                      <img className='post_img' src={like}/>
                  </div>
                  <div className='post_likecount'>
                       25
                  </div>
            </div>
            <div className='post_likeshare'>
                <div className='post_tab'>
                    <div className='post_tabfirst'>
                        <img className='post_tabimg' src={likebutton}/>
                    </div>
                    <div className='post_tabtext'>
                        Like
                    </div>
                </div>
                <div className='post_tab'>
                    <div className='post_tabfirst'>
                        <img className='post_tabimg' src={commentbutton}/>
                    </div>
                    <div className='post_tabtext'>
                        Comment
                    </div>
                </div>
                <div className='post_tab'>
                    <div className='post_tabfirst'>
                        <img className='post_tabimg' src={sharebutton}/>
                    </div>
                    <div className='post_tabtext'>
                        Share
                    </div>
                </div>
            </div>
            <div className='upload_comment'>
                <div className='upload_header'>
                <div>
                    <Avatar src="" className="upload_img" />
                </div>
                <div>
                    <input className='upload_box' placeholder="What's on your mind?" type="text"/>
                </div>
                </div>
            </div>
         </Paper>
      </div>
    )
  }
}

export default Post