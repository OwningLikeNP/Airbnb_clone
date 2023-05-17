import React, { useEffect, useState } from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { intervalToDuration } from 'date-fns'

function SearchPage(props) {
   //Search page to show search results



  function formatDate(string){ //function to change passed date object to desired date format
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }

    var inputData = useLocation(); //to access passed in params through props
    var startDate = formatDate(inputData.state.start); //storing reformated start date
    var endDate = formatDate(inputData.state.end); // storing reformated end date
    var guestCount = inputData.state.guestCount;  //storing guest count passed through props
    var country = inputData.state.country; // storing country info passed through props
    var [queryResult, setQueryResult] = useState([]); //storing data fetched from the server
    
    var interval = intervalToDuration({ //function to calculate number of days between start and end date
      start: inputData.state.end, 
      end: inputData.state.start});
   
    var totalNights = interval.days;  //getting number of nights for the stay based on start and end date

    var resultCount= Object.values(queryResult).flat().length; //getting number for search results returned by server
 
    
      //Send query to search listed properties in selected country
    const getQueryData = () => {
      const options = {
          method: 'GET',
          url: 'http://localhost:3307/property',
          params: {country: country,
          },
      }
 

      axios.request(options).then((response) =>{
          setQueryResult(response.data) //storing fetched data
       
          
    
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
          <p>{resultCount} Stay(s) in {country} - {startDate} to {endDate} - Number of Guests: {guestCount} - Total Nights: {totalNights}</p> {/*displaying search criteria that user has selected */}
          <h1>Stays Nearby</h1>
          <Button variant='outlined'>Cancellation Flexibility</Button>
          <Button variant='outlined'>Property Type</Button>
          <Button variant='outlined'>Price</Button>
          <Button variant='outlined'>Rooms and Beds</Button>
          <Button variant='outlined'>More Filters</Button>
        </div>
        {/* mapping search results returned by server */}
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