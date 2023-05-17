const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var userCount = 1001;
const app = express();
app.use(cors());

//server logic to fetch and post to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'moazzam',
    database: 'IU_db'
});

app.get('/', (re, res) =>{
    return res.json('From Backend')
});

//fetch all countries listed in a specific region
app.get('/country', (req, res) =>{
   // query to fetch list of countries in region  selected by user
    const sql = "SELECT country_name, country_ID FROM country WHERE region_id= " + req.query.selectedRegion;
    db.query(sql, (err, data) =>{
          // return error if there is one, otherwise return fetched data
        if(err) return res.json(err);
        return res.json(data);
        
    })
})

//feth all properties listed in a country
app.get('/property', (req, res) =>{
    // query to fetch list of properties in country selected by user
     const sql = "select property_name, property_description, rating, rent, city_name from property join address on property.address_ID = address.address_ID join city on address.city_ID = city.city_ID join country on city.country_ID = country.country_ID where country_name = '" + req.query.country + "'";
    db.query(sql, (err, data) =>{
        // return error if there is one, otherwise return fetched data
        if(err) return res.json(err);
        return res.json(data);
        
    })
})

//fetch user info for login
app.get('/users', (req, res) =>{
   // query to fetch login info based on user input
    const sql = "SELECT email, pass FROM users WHERE email= '" + req.query.username + "' AND pass= '" + req.query.password + "'";
    db.query(sql, (err, data) =>{
        

        // return error if there is one, otherwise return fetched data
        if(err) {return res.json({err});
        } else if (res){
           
            return res.json(data);
        }

    })
})

//post user info to register
app.post('/users', (req, res) =>{

   userCount++ //to make sure each new user has a unique ID

   // query to post user info based on user input for registration
     const sql = "insert into users (user_ID, email, pass, first_name, last_name) values (" + userCount + ", '" + req.query.email + "', '" + req.query.password + "', '" + req.query.fname + "', '" + req.query.lname + "')"
     db.query(sql, (err, data) =>{
        // return error if there is one, otherwise return fetched data
        if(err) return res.json(err);
        return res.json(data);
     
})
})
app.listen(3307, ()=>{
    console.log('listening');
})

