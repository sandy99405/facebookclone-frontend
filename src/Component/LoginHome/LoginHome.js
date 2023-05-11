import { Grid, Paper } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import react, { Component } from 'react'
import {auth} from '../../config/firebase';

class LoginHome extends Component {
    constructor(props){
        super(props)
        
        this.state={
             signIn : true,

             //signin
             signin_email:null,
             signin_password:null,

             //signup
             signup_name:null,
             signup_email:null,
             signup_password:null
        }
    }

    switchPanel=()=>{
        if(this.state.signIn){
            this.setState({signIn: false});
        }
        else{
            this.setState({signIn: true});
        }    
    }

    signUP = async ()=>{
        await createUserWithEmailAndPassword(auth,this.state.signup_email,this.state.signup_password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            let payload = {
                "userID" : user.uid,
                "userName": this.state.signup_name,
                "userImage": "www.dummyurl.com"
            }

            const requestOptions ={
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body : JSON.stringify(payload),
            };

            fetch("http://localhost:8080/api/userService/save",requestOptions)
            .then(response => response.json())
            .then(data =>{
                var user = userCredential.user;
                localStorage.setItem("user",JSON.stringify(data));
                window.location.reload();
            })
            .catch(error =>{

            })
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }

    signInMethod = async ()=>{
        await signInWithEmailAndPassword(auth,this.state.signin_email,this.state.signin_password)
        .then((userCredential)=>{
            var user = userCredential.user;
            fetch("http://localhost:8080/api/userService/getAllUsers/"+user.uid)
            .then(response => response.json())
            .then(data =>{
                localStorage.setItem("user",JSON.stringify(data));
                window.location.reload();
            })
            /* let payload = {
                "userID" : user.uid,
                "userName": this.state.signup_name,
                "userImage": "www.dummyurl.com"
            }

            const requestOptions ={
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body : JSON.stringify(payload),
            };

            fetch("http://localhost:8080/api/userService/save",requestOptions)
            .then(response => response.json())
            .then(data =>{

            })
            .catch(error =>{

            }) */
        })
        .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        });
    }


    render() {
    return (
      <div>
         <div className="main_container">
            <Grid className="main_content" container>
                <Grid item xs={7}>
                    <div className="fblogo">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width="300px"/>
                    </div>
                    <div>
                        <h1 className="text">Facebook helps you connect and share with the people in your life</h1>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper /* className="logincard_container" */>
                    {
                        this.state.signIn == true ? 
      (                  <div /* container="login_panel" */>
                            <div>
                                <input onChange={(event)=>(this.setState({signin_email:event.currentTarget.value}))} type="text" /* className="login_input" */ placeholder="Email_address"/>
                            </div>
                            <div>
                                <input onChange={(event)=>(this.setState({signin_password:event.currentTarget.value}))} type="password" /* className="login_input" */ placeholder="Password"/>
                            </div>
                            <div>
                                <button /*  className="login_button" */ onClick={()=>this.signInMethod()}>Log in</button>
                            </div>
                            <div>
                                <div /* className="forget_Text" */>Forgotten password</div>
                            </div>
                            <div>
                                <div /* className="dividor" */></div>
                            </div>
                            <div>
                                <button /*  className="login_createnew" */ onClick={()=>this.switchPanel()}>Create New Account</button>
                            </div>
                        </div>
     ) :
       (                 <div /* container="login_panel" */>
                            <div>
                               <input onChange={(event)=>(this.setState({signup_name:event.currentTarget.value}))} type="text" /* className="login_input" */ placeholder="Name"/>
                            </div>
                            <div>
                               <input onChange={(event)=>(this.setState({signup_email:event.currentTarget.value}))} type="text" /* className="login_input" */ placeholder="Email Address"/>
                            </div>
                            <div>
                               <input onChange={(event)=>(this.setState({signup_password:event.currentTarget.value}))} type="password" /* className="login_input" */ placeholder="Password"/>
                            </div>
                            <div>
                               <button onClick={()=>this.signUP()} className="login_button">Sign Up</button>
                            </div>
                            <div>
                              <button onClick={()=>this.switchPanel()} className="forget_text">Already have an account?</button>
                            </div>
                        </div>)
                       }
                    </Paper>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
         </div>
      </div>
    )
  }
}


export default LoginHome 