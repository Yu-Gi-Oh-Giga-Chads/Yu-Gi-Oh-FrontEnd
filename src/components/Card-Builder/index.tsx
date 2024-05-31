import React, { useState } from 'react';
import DeckCardModifier from '../DeckCardModifier';
import './Card.css';

interface CardProps {
    name : string,
    imageUrl : string,
    isEdit? : boolean,
    isInDeck : boolean
}

const Card = ({ name, imageUrl, isEdit, isInDeck } : CardProps) => {

  const [isModifierOn, setModifierOn] = useState<boolean>(false);

  if(!isEdit) return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
  else if(isEdit && !isInDeck) return (
    <div className="card-inedit" onClick={() => setModifierOn(!isModifierOn)}>
      <img src={imageUrl} alt={name} />
    </div>
  );
  else return (
      <div className="card-inedit" onClick={() => setModifierOn(!isModifierOn)}>
        {isModifierOn && <DeckCardModifier/>}
        <img src={imageUrl} alt={name} />
      </div>
  );
  
};

export default Card;