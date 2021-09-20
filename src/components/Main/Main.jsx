import React from 'react';
import Card from '../Card/Card';
import "./Main.scss"

const Main = (props) => {
  const { beerInfo } = props;

  return (
    <div className="main">
      <div className="main__title">PUNK-API</div>
      <div className="main__phrase">Find the beer for you!</div>
      <Card beerInfo={beerInfo} />
    </div>
  )
}

export default Main
