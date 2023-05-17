import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import Popup from './Popup';

function Login() {
    //Login page
    const [login, setLogin] = useState('');  //setting login state
    const navigate = useNavigate(); //to navigate to another component
    var [username, setUsername] = useState(); //storing user entered username
    var [password, setPassword] = useState(); //storing user entered password
    var [popup, setPopup] = useState(false); //show/hide popup for successful login
    var [popup_fail, setPopup_fail] = useState(false); //show/hide popup for invalid login
    var [show, setShow] = useState(true); //toggle for displaying/hiding login button
    
    {/* Send login details to check if user exits*/}
     const getLogin = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:3307/users',
            params: {
                username: username,
                password: password,
            },
        }
  
        
        axios.request(options).then((response) =>{
            
                //check valid response from server
                if(Object.keys(response.data).length > 0)
                {
                     {/* If login details are found in the database, show successful login and redirect to homepage*/}
                    setLogin(response.data) //storing fetched data
                    if (username === login[0].email && password === login[0].pass){
                    
                        setShow(!show)
                        setPopup(true)
                        setTimeout(() =>{
                            navigate('/')
                        }, 2000)
                        
                         }    
                        
                }else {
                     {/* If incorrect login details, show login fail for 2 seconds*/}
                        setPopup_fail(true)
                        setTimeout(() =>{
                            setPopup_fail(false)
                        }, 2000)
                 } 
            

      
        }).catch((error) =>{
            console.log(error)
        })
        
    }     

        
    
        const handleSubmit = (e) =>{  {/* calling login function upon submit*/}
     
            getLogin();
            
        }
     
        function handleClick (){  {/* redirecting to register page on button click*/}
            navigate('/register')
        }

         
             
      
  return (

    <div className='auth__form'>
        <h2>Login</h2>
    <form className='form' onSubmit={handleSubmit}>
         {/*Login form layout*/}
        <label for='username'>Username</label>
        <input required value= {username} placeholder='Email Address' id='username' name='username' onChange={(e) =>setUsername(e.target.value)}/>
        <label for='password'>Password</label>
        <input required value= {password} type='password' placeholder='***********' id='password' name='password' onChange={(e) =>setPassword(e.target.value)}/>
        <div className='submit'>
            <div className='submit__button'>

                 {/* Showing loging button by default. 
                    If login is successful, hide login button and show success popup instead
                        if loging fails, show loging button as well as failure popul*/}
            {
                
                        show ? (
                            <Button onClick={() => {handleSubmit()}}>Log in</Button>
                        ) : (
                           ''
                        )
                    }
            </div>
            
      
        </div>
        
    </form>
    <Button onClick={handleClick}>Don't have an account? Register here.</Button>
    <Popup trigger={popup}>
        <h3>Logged In!</h3>
        <p>Redirecting...</p>
    </Popup>
    <Popup trigger={popup_fail}>
        <h3>'Incorrect Username or Password'</h3>
        <p>Please try again</p>
    </Popup>
    </div>
 

  )
}

export default Login