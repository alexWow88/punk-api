import React, { useState, useEffect } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  const [beerInfo, setBeerInfo] = useState([]); 
  
  const fetchBeerData = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(jsonResponse => setBeerInfo(jsonResponse))
    .catch(err => console.log("err"))};

    useEffect(() => {fetchBeerData()},[]);

  return (
    <div className="App">
      <Navbar />
      { beerInfo && <Main beerInfo={beerInfo} />}
    </div>
  );
}

export default App;
