import React, { useState, useEffect } from 'react'
import "./Card.scss"
import beerImg from "../../assets/images/beer.jpg"

const Card = () => {
  const [beerInfo, setBeerInfo] = useState([]); 
  const fetchBeerData = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(jsonResponse => setBeerInfo(jsonResponse))
    .catch(err => console.log("err"))};

    useEffect(() => {fetchBeerData()});


    const beerCards = beerInfo.map(beer => (
      <div className="beer-card">
        <img src={beerImg} className="beer-card__img" />
        <div className="">{beer.name}</div>
      </div>
    ))

  return (
    <div className="card-grid">
      {beerCards}
    </div>
  )
}

export default Card;
