import React from 'react'

import './Card.scss'

const Card = (props) => {
  const { beerImg, beerName, beerDescription } = props;

  const formattedDescription = beerDescription.substring(0, 80) + '...';
  return (
    <div>
      <div className="p-card shadow-5 p-4">
        <img src={beerImg} alt="beer" className="beer-image" />
        <h5>{beerName}</h5>
        <p>{formattedDescription}</p>
      </div>
    </div>
  )
}

export default Card;
