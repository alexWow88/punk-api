import React from "react"
// import React, { useState, useEffect } from 'react'
import "./Card.scss";

const Card = (props) => {
  const { beerInfo, searchArray } = props;

  const beerCards = beerInfo.map(beer => (
      <div className="beer-card">
        <img src={beer.image_url} className="beer-card__img" />
        <div className="beer-card__name">{beer.name}</div>
        <div className="beer-card__tagline">{beer.tagline}</div>
        <div className="beer-card__pairing-header">Food Pairings</div>
        <ul className="beer-card__list">
          {beer.food_pairing.map(pairing => <li>{pairing}</li>)}
        </ul>
      </div>

    ))

  return (
    <div className="card-grid">
      {beerCards}
    </div>
    )
}

export default Card;
