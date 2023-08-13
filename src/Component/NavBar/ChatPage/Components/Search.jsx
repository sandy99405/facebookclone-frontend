import React from 'react'
import './../Style.scss'
import img from './../images/img/img.png'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchform'>
        <input type='text'/>
      </div>
      <div className="userChat">
         <img src={img} alt=''/>
         <div className="userChatInfo">
            <span>Jane</span> 
         </div>
      </div>
    </div>
  )
}


export default Search