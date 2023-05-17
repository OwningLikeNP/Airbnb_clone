import React, { useState } from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PeopleIcon from '@material-ui/icons/People'
import {Button} from '@material-ui/core'
import {useNavigate} from 'react-router-dom'


function Search() {
 //Search component to select dates and number of guests


    const [startDate, setStartDate] = useState (new Date()); //to store start date
    const [endDate, setEndDate] = useState (new Date()); //to store end date
    const navigate = useNavigate(); //to navigate to a different component
    const [guests, setGuests] = useState(2); //to store guest count
    const selectionRange = { //to store selection range chosen by user
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    function handleChange (event)  { //set guest count as set by user
      setGuests(event.target.value);
    };
    

    function handleSubmit(event){
       // Navigate to seach page with relevant params on submit
      navigate('/search', {
        state:{ 
          start: selectionRange.startDate,
          end: selectionRange.endDate,
          guestCount: guests,
          country: 'Norway',
          nights: 1
        },
      })
    }
    function handleSelect(ranges) { //set start and end date as chosen by user
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

  return (
    <div className='search'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>Number of Guests <PeopleIcon /></h2>
        <input min={1} defaultValue={2} type='number' onChange={handleChange}></input>
        <Button onClick={handleSubmit}>Search Airbnb</Button>
    </div>
  )
}

export default Search