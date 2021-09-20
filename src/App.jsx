import React, { useState, useEffect } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  const [beerInfo, setBeerInfo] = useState([]); 
  const [searchText, setSearchText] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  
  const fetchBeerData = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(jsonResponse => setBeerInfo(jsonResponse))
    .catch(err => console.log("err"))};

    useEffect(() => {fetchBeerData()},[]);

  const filterSearchArr = () => {
    setSearchArray(beerInfo.filter(beer => beer.name.includes(searchText)));
    console.log(searchArray);
  }


  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} filterSearchArr={filterSearchArr} />
      { beerInfo && <Main beerInfo={beerInfo} searchArray={searchArray} />}
    </div>
  );
}

export default App;
