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


function Region(props) {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [country, setCountry] = useState('');
    const [startDate, setStartDate] = useState (new Date());
    const [endDate, setEndDate] = useState (new Date());
    const navigate = useNavigate();
    const [guests, setGuests] = useState(2);
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    const handleCountry = (event) => {
      setCountry(event.target.value);
    };

    const getQueryData = () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:3307/country',
            params: {selectedRegion: location.state.region_id},
        }
   

        axios.request(options).then((response) =>{
            setData(response.data)
      
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(()=>{
      getQueryData();
    })
        
  


    function handleChange (event)  {
      setGuests(event.target.value);
    };
    

    function handleSubmit(event){
      
      navigate('/search', {
        state:{ 
          start: selectionRange.startDate,
          end: selectionRange.endDate,
          guestCount: guests,
          country: country
        },
      })
    }
    function handleSelect(ranges) {
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