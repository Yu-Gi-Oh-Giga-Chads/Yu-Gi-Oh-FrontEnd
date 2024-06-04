import React, { useState } from 'react';
import DeckCardModifier from '../DeckCardModifier';
import './Card.css';

interface CardData {
  id?: number;
  name: string;
  imageUrl: string;
  atk?: number;
  def?: number;
  effect?: string;
  isEdit? : boolean;
  isInDeck? : boolean;
  removeCard? : any;
  deck? : any;
}

const Card = ({ id, name, imageUrl, atk, def, effect, isEdit, isInDeck, removeCard, deck } : CardData) => {

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
        <img src={imageUrl} alt={name} />
        {isModifierOn && <DeckCardModifier id={id} name={name} imageUrl={imageUrl} atk={atk} def={def} effect={effect} removeCard={removeCard} deck={deck}/>}
      </div>
  );
  
};

export default Card;