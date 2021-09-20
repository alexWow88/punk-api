import React from 'react';
import Card from '../Card/Card';
import "./Main.scss"

const Main = (props) => {
  const { beerInfo } = props;

  return (
    <div className="main">
      <Card beerInfo={beerInfo} />
    </div>
  )
}

export default Main
