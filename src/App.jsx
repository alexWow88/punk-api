import React, { useState, useEffect } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  const [beerInfo, setBeerInfo] = useState([]); 
  const [filteredSearchArr, setFilteredSearchArr] = useState([]);
  
  const fetchBeerData = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(jsonResponse => setBeerInfo(jsonResponse))
    .catch(err => console.log("err"))};

    useEffect(() => {fetchBeerData()},[]);

    const filterArr = (e) => {
      e.preventDefault();
      setFilteredSearchArr(beerInfo.filter(beer => beer.includes(e.target.value) == true))
    }

  // if (filteredSearchArr == []) {
  return (
    <div className="App">
      <Navbar filterArr={filterArr} />
      { beerInfo && <Main beerInfo={beerInfo} />}
    </div>
  );
// } else if (!filteredSearchArr) {
//   return (
//     <div className="App">
//       <Navbar filterArr={filterArr} />
//       { beerInfo && <Main beerInfo={filteredSearchArr} />}
//     </div>
//   );
}

export default App;
