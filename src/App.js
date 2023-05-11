
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
    <div className="app">
      <Router>
          <Header />
          
          <Routes>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/region' element={<Region />} />
          <Route path='/' element={<Home />} />
          
          
          </Routes>
         
          <Footer />
      </Router>
    </div>
  );
}
export default App