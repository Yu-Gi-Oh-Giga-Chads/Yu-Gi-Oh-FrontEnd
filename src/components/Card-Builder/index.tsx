import React from 'react';
import './Card.css';

interface CardProps {
    name : string,
    imageUrl : string
}


const Card = ({ name, imageUrl } : CardProps) => {
  console.log(imageUrl)
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;