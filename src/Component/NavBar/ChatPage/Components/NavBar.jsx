import React from 'react'
import './../Style.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Lama chat</span>
        <div className='user'>
             <img src='' alt=''/>
             <span>John</span>
             <button>logout</button>
        </div>
    </div>
  )
}


export default NavBar