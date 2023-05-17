import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Form.css'
import axios from 'axios';
import Popup from './Popup';

function Register() {

    //User registration page


    const navigate = useNavigate(); //to navigate to another component
    var [email, setEmail] = useState(); //to store email entered by user
    var [password, setPassword] = useState(); //to store password entered by user
    var [fname, setFname] = useState(); // to store user first name
    var [lname, setLname] = useState(); // to store user last name
    var [show, setShow] = useState(true); //toggle for showing/hiding register button
    var [popup, setPopup] = useState(false); //toggle for showing/hiding popup
    
    function handleClick (){ //to navigate to login page on button click
        navigate('/login')
    }

     {/* Send post request with params to store new user info in the database*/}
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

                //hide register button after successful registration and show success popup message instead
               setShow(!show)
               setPopup(true)
               //redirect to home page after 2 seconds
                setTimeout(() =>{
                   navigate('/')
                }, 2000)
                

      
        }).catch((error) =>{
            console.log(error)
        })
        
    }     

    
    
        const handleSubmit = (e) =>{
                    //call registerUser function to post user info to server upon submit
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
            {/* Showing register button by default. 
                    After successful registration. hide register button and show success popup message instead*/}
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