import React, { useEffect, useState } from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { intervalToDuration } from 'date-fns'

function SearchPage(props) {
   
  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }
    var inputData = useLocation();
    var startDate = formatDate(inputData.state.start);
    var endDate = formatDate(inputData.state.end);
    var guestCount = inputData.state.guestCount; 
    var country = inputData.state.country;
    var [queryResult, setQueryResult] = useState([]);
    var interval = intervalToDuration({
      start: inputData.state.end, 
      end: inputData.state.start});
    var totalNights = interval.days;
    var resultCount= Object.values(queryResult).flat().length;
 
    

    const getQueryData = () => {
      const options = {
          method: 'GET',
          url: 'http://localhost:3307/property',
          params: {country: country,
          },
      }
 

      axios.request(options).then((response) =>{
          setQueryResult(response.data)
       
          
    
      }).catch((error) =>{
          console.log(error)
      })
  }    
  useEffect(()=>{
    getQueryData()
  }, [null])
  

  return (
    <div className='search__page'>
        <div className='searchPage__info'>
          <p>{resultCount} Stay(s) in {country} - {startDate} to {endDate} - Number of Guests: {guestCount} - Total Nights: {totalNights}</p>
          <h1>Stays Nearby</h1>
          <Button variant='outlined'>Cancellation Flexibility</Button>
          <Button variant='outlined'>Property Type</Button>
          <Button variant='outlined'>Price</Button>
          <Button variant='outlined'>Rooms and Beds</Button>
          <Button variant='outlined'>More Filters</Button>
        </div>
            {queryResult.map(q=>(<SearchResult location={q.city_name}
            title={q.property_name}
            description={q.property_description}
            star={q.rating}
            price={q.rent}
            nights= {totalNights}
             />))}
            
            
    </div>
  )
}

export default SearchPage