
import React from 'react';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Region from './Region'
import Login from './Login'
import Register from './Register';

function App() {
   
  
  return (
          // Setting routes for app pages 
    <div className="app">
      <Router>
          <Header />
          
          <Routes>
          <Route path='/register' element={<Register />}/>    {/* Show register page for /register */}
          <Route path='/login' element={<Login />}/>          {/* Show login page for /login */}
          <Route path='/search' element={<SearchPage />} />   {/* Show search page for /search */}
          <Route path='/region' element={<Region />} />       {/* Show region page for /region */}
          <Route path='/' element={<Home />} />               {/* Show home page for / */}
          
          
          </Routes>
         
          <Footer />
      </Router>
    </div>
  );
}
export default App