import React from 'react'
import "./Style.scss"


const Login = () => {
    return (
      <div className="formContainer">
          <div className="formWrapper">
            <span className='logo'>Lama chat</span>
            <span className='title'>Login</span>
              <form action=''>
                  <input type="email" placeholder='email'/>
                  <input type="password" placeholder='password'/>
                  
                  <button>Sign In</button>
              </form>
              <p>You don't have an account? Register</p>
          </div>
      </div>
    )
  }
  
  
  export default Login