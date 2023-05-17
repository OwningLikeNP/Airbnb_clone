import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'
import {useNavigate} from 'react-router-dom'
import { nextDay } from 'date-fns'

function Banner() {
    const [showSearch, setShowSearch] = useState (false);  //setting value to search or hide DateRangePicker
    const navigate = useNavigate(); //to navigate to different component 
    const startDate = new Date(); //to store start date
    const endDate = nextDay(new Date(), 1); //to store end date


    //banner display with date search button
  return (
    <div className='banner'>
        <div className='banner__search'>
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)} //toggling showSearch to show/hide DateRangePicker
            className='banner__searchButton' variant='outlined'>
              {showSearch ? 'Hide Calendar' : 'Search Dates'}
            </Button>
        </div>
            <div className='banner__info'>
            <h1>Get out and Stretch Your Imagination</h1>
            <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
            <Button variant='outlined' onClick={() => navigate('/search', {  //navigating to search page on button click with parameters
        state:{ 
          start: startDate,
          end: endDate,
          guestCount: 2,
          country: 'Norway', 
        },
      }) }>Explore Nearby</Button>
            </div>
    </div>
  )
}

export default Banner