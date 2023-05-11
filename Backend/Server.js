const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var userCount = 1001;
const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'moazzam',
    database: 'IU_db'
});

app.get('/', (re, res) =>{
    return res.json('From Backend')
});

app.get('/country', (req, res) =>{
   
    const sql = "SELECT country_name, country_ID FROM country WHERE region_id= " + req.query.selectedRegion;
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
        
    })
})

app.get('/property', (req, res) =>{
     const sql = "select property_name, property_description, rating, rent, city_name from property join address on property.address_ID = address.address_ID join city on address.city_ID = city.city_ID join country on city.country_ID = country.country_ID where country_name = '" + req.query.country + "'";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
        
    })
})

app.get('/users', (req, res) =>{
   
    const sql = "SELECT email, pass FROM users WHERE email= '" + req.query.username + "' AND pass= '" + req.query.password + "'";
    db.query(sql, (err, data) =>{
        
        if(err) {return res.json({err});
        } else if (res){
           // console.log(res.json(data))
            return res.json(data);
        }

    })
})


app.post('/users', (req, res) =>{

   userCount++
     const sql = "insert into users (user_ID, email, pass, first_name, last_name) values (" + userCount + ", '" + req.query.email + "', '" + req.query.password + "', '" + req.query.fname + "', '" + req.query.lname + "')"
     db.query(sql, (err, data) =>{
        
        if(err) return res.json(err);
        return res.json(data);
     
})
})
app.listen(3307, ()=>{
    console.log('listening');
})

