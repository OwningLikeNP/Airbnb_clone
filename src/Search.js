import React, { useState } from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PeopleIcon from '@material-ui/icons/People'
import {Button} from '@material-ui/core'
import {useNavigate} from 'react-router-dom'


function Search() {

    const [startDate, setStartDate] = useState (new Date());
    const [endDate, setEndDate] = useState (new Date());
    const navigate = useNavigate();
    const [guests, setGuests] = useState(2);
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    function handleChange (event)  {
      setGuests(event.target.value);
    };
    

    function handleSubmit(event){
      
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
    function handleSelect(ranges) {
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