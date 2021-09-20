import React from 'react';
import Card from '../Card/Card';
import "./Main.scss"

const Main = (props) => {
  const { beerInfo, searchArray } = props;

  return (
    <div className="main">
      <div className="main__title">PUNK-API</div>
      <div className="main__phrase">Find the beer for you!</div>
      <Card beerInfo={beerInfo} searchArray={searchArray} />
    </div>
  )
}

export default Main
