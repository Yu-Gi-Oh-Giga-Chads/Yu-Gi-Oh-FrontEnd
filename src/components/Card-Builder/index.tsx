import React from 'react';
import './Card.css';

interface CardProps {
    name : string,
    imageUrl : string,
    isEdit? : boolean
}


const Card = ({ name, imageUrl, isEdit } : CardProps) => {
  if(!isEdit) return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
  else return (
    <div className="card-inedit">
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default Card;