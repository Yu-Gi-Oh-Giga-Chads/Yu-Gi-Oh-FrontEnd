import React from 'react';
import './CardInfo.css';

interface CardInfoProps {
  card: {
    name: string;
    imageUrl: string;
    atk?: number;
    def?: number;
    effect?: string;
  };
  onClose: () => void;
}

const CardInfo: React.FC<CardInfoProps> = ({ card, onClose }) => {
  return (
    <div className="card-info-overlay" onClick={onClose}>
      <div className="card-info" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={card.imageUrl} alt={card.name} className="card-info-image" />
        <div className="card-info-details">
          <h2>{card.name}</h2>
          {card.atk && <p><strong>ATK:</strong> {card.atk}</p>}
          {card.def && <p><strong>DEF:</strong> {card.def}</p>}
          {card.effect && <p><strong>Effect:</strong> {card.effect}</p>}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
