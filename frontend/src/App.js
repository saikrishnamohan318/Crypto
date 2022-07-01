import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import View from './components/view';
import Welcome from './components/welcome';

function App() {
  const [coinsData,setCoinsData] = useState([]);
  useEffect(()=>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res=>{
      return res.json();
    }).then(data=>{setCoinsData(data)})
  },[])
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Welcome />}/>
          <Route path='/home' element={<Home coins={coinsData}/>}/>
          <Route path='/view' element={<View />}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
