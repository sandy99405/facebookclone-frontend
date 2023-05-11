import { Avatar } from '@mui/material'
import React, { Component } from 'react'
import './MainPage.css';

class ImageLayout extends Component {
  render() {
    return (
      <div className='imageLayout_container'>
          <div className='imageLayout_imglay'>
              <Avatar className="imageLayout_img" src={this.props.image} />
          </div>
          <div className='imageLayout_text'>
              {this.props.text}
          </div>
      </div>
    )
  }
}

export default ImageLayout