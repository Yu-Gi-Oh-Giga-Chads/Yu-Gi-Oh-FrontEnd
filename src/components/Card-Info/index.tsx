import React from 'react';
import './CardInfo.css';

interface CardInfoProps {
  card: {
    id? : number,
    name? : string,
    type? : string,
    imageUrl?: string,
    frametype? : string,
    desc? : string,
    atk? : number,
    def? : number,
    level? : number,
    race? : string,
    attribute? : string
  };
  onClose: () => void;
  isEditMode : boolean;
  addCard? : any
}

const CardInfo: React.FC<CardInfoProps> = ({ card, onClose, isEditMode, addCard }) => {
  return (
    <div className="card-info-overlay" onClick={onClose}>
      <div className="card-info" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={card.imageUrl} alt={card.name} className="card-info-image" />
        <div className="card-info-details">
          <h2>{card.name}</h2>
          {card.atk && <p><strong>ATK:</strong> {card.atk}</p>}
          {card.def && <p><strong>DEF:</strong> {card.def}</p>}
          {card.desc && <p><strong>Effect:</strong> {card.desc}</p>}
          {isEditMode && <div className='add-button' onClick={addCard}>Add</div>}
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
