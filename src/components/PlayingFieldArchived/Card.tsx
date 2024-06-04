import React from 'react';
import './Card.css';

interface CardProps {
  card: {
    id: number;
    name: string;
    imageUrl: string;
    atk?: number;
    def?: number;
    effect?: string;
  };
  showBack: boolean;
}

const Card: React.FC<CardProps> = ({ card, showBack }) => {
  return (
    <div className="card">
      <img src={showBack ? 'https://orig00.deviantart.net/9c03/f/2013/196/d/3/yugioh_card_back_v2_by_endergon_oscuro-d6dlsyg.jpg' : card.imageUrl} alt={card.name} className="card-image" />
      {!showBack && (
        <div className="card-details">
          <p>{card.name}</p>
          <p>ATK: {card.atk}</p>
          <p>DEF: {card.def}</p>
          <p>{card.effect}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
