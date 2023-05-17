import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'
import './Region.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PeopleIcon from '@material-ui/icons/People'
import {useNavigate} from 'react-router-dom'

import { useLocation } from 'react-router-dom'



//Page for choosing country and searching properties in specific region 

function Region(props) { 
    const location = useLocation(); //to store data passed in through params
    const [data, setData] = useState([]); //to store data fetched from the server 
    const [country, setCountry] = useState(''); //to store selected country
    const [startDate, setStartDate] = useState (new Date()); //to store start date
    const [endDate, setEndDate] = useState (new Date()); //to store end date
    const navigate = useNavigate(); //to navigate to another component
    const [guests, setGuests] = useState(2); //to store number of guests
    const selectionRange = { //to store selection range for DateRangePicker
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    const handleCountry = (event) => {  //storing country chosen by user
      setCountry(event.target.value);
    };

      {/* Function to fetch list of countries in selected region that was passed in through props*/}
    const getQueryData = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:3307/country',
            params: {selectedRegion: location.state.region_id},
        }
   

        axios.request(options).then((response) =>{
            setData(response.data) //storing fetched data
      
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(()=>{ 
      getQueryData();
    })
        
  


    function handleChange (event)  { //storing guest count as set by user
      setGuests(event.target.value);
    };
    

    function handleSubmit(event){
       // Function to navigate to search page on submit with relevant params
      navigate('/search', {
        state:{ 
          start: selectionRange.startDate,
          end: selectionRange.endDate,
          guestCount: guests,
          country: country
        },
      })
    }

    function handleSelect(ranges) { //setting start and end date based on user selection
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };
    
 
  return (
    
    <div className='region'>
         <h1>Countries in {location.state.region_name} </h1>
         <div className='search__options'>
         <Box sx={{ minWidth: 120 }}>
            <FormControl >
                <InputLabel
                variant="outlined"
                sx={{
                display: 'flex',
                position: 'relative',
                width: 200,
                border: 'none',
                height: 35,
                marginTop: 10,
                marginLeft: 50,
                fontWeight:700,
                color: "#ff7779",
                marginBottom: -3.5,
               
                }}>Country</InputLabel>
                <Select
                 variant="outlined"
                sx={{
                display: 'flex',
                position: 'relative',
                width: 200,
                border: 'none',
                background: 'white',
                height: 40,
                marginLeft: 45,
                fontWeight:700,
                marginRight: 10,
                color: "#ff7779",
                "& .MuiSvgIcon-root": {
                    color: "white",
                },
                }}
                value={country}
   
                label="Country"
                onChange={handleCountry}
                >
                   {/* mapping country info returned by server */}
                {data.map(d=>(<MenuItem value={d.country_name}>{d.country_name}</MenuItem>))}          
                </Select>
            </FormControl>
        </Box>
            <div className='dateRange'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of Guests <PeopleIcon /></h2>
            <input min={1} defaultValue={2} type='number' onChange={handleChange}></input>
            <Button onClick={handleSubmit}>Search Airbnb</Button>
            </div>
         </div>

    </div>
    
  )
}

export default Region