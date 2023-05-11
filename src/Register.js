import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Form.css'
import axios from 'axios';
import Popup from './Popup';

function Register() {
    const navigate = useNavigate();
    var [email, setEmail] = useState();
    var [password, setPassword] = useState();
    var [fname, setFname] = useState();
    var [lname, setLname] = useState();
    var [show, setShow] = useState(true);
    var [popup, setPopup] = useState(false);
    
    function handleClick (){
        navigate('/login')
    }
    const registerUser = () => {
        const options = {
            method: 'POST',
            url: 'http://localhost:3307/users',
            params: {
                email: email,
                password: password,
                fname: fname,
                lname: lname
            },
        }
  
    
        axios.request(options).then((response) =>{

        
       
            
       
            console.log(response.data)
           
               setShow(!show)
               setPopup(true)
                setTimeout(() =>{
                   navigate('/')
                }, 2000)
                
                 
                
                 
        
            
      
        }).catch((error) =>{
            console.log(error)
        })
        
    }     

    
    
        const handleSubmit = (e) =>{
     
            registerUser();
            
        }
  return (
    <div className='auth__form'>
        <h2>Register</h2>
    <form className='form' onSubmit={handleSubmit}>
        <label for='fname'>First Name</label>
        <input value= {fname} placeholder='First Name' id='fname' name='fname' onChange={(e) =>setFname(e.target.value)} required/>
        <label for='lname'>Last Name</label>
        <input value= {lname} placeholder='Last Name' id='lname' name='fname' onChange={(e) =>setLname(e.target.value)} required/>
        <label for='email'>Email</label>
        <input value= {email} placeholder='Email Address' id='email' name='email' onChange={(e) =>setEmail(e.target.value)} required/>
        <label for='password'>Password</label>
        <input value= {password} type='password' placeholder='***********' id='password' name='password' onChange={(e) =>setPassword(e.target.value)} required/>
        <div className='submit'>
        <div className='submit__button'>
            {
                        show ? (
                            <Button onClick={() => {handleSubmit()}}>Register</Button>
                        ) : (
                           ''
                        )
                    }
            </div>
        
        </div>
    </form>
    <Button onClick={handleClick}>Already have an account? Login here.</Button>
    <Popup trigger={popup}>
        <h3>User Registered!</h3>
        <p>Redirecting...</p>
    </Popup>
    </div>
  )
}

export default Register