import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import Popup from './Popup';

function Login() {

    const [login, setLogin] = useState('');
    const navigate = useNavigate();
    var [username, setUsername] = useState();
    var [password, setPassword] = useState();
    var [popup, setPopup] = useState(false);
    var [popup_fail, setPopup_fail] = useState(false);
    var [show, setShow] = useState(true);
    
 
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
       
            
                if(Object.keys(response.data).length > 0)
                {
                    setLogin(response.data)
                    if (username === login[0].email && password === login[0].pass){
                    
                        setShow(!show)
                        setPopup(true)
                        setTimeout(() =>{
                            navigate('/')
                        }, 2000)
                        
                         }    
                        
                }else {
                        setPopup_fail(true)
                        setTimeout(() =>{
                            setPopup_fail(false)
                        }, 2000)
                 } 
            
            
            
                 
        
            
      
        }).catch((error) =>{
            console.log(error)
        })
        
    }     

    
    
        const handleSubmit = (e) =>{
     
            getLogin();
            
        }

        function handleClick (){
            navigate('/register')
        }

         
             
      
  return (

    <div className='auth__form'>
        <h2>Login</h2>
    <form className='form' onSubmit={handleSubmit}>
        
        <label for='username'>Username</label>
        <input required value= {username} placeholder='Email Address' id='username' name='username' onChange={(e) =>setUsername(e.target.value)}/>
        <label for='password'>Password</label>
        <input required value= {password} type='password' placeholder='***********' id='password' name='password' onChange={(e) =>setPassword(e.target.value)}/>
        <div className='submit'>
            <div className='submit__button'>
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