import React, { useState, useEffect } from 'react';
import './DeckBuilder.css';
import Card from '../../components/Card-Builder';
import axios from 'axios';
import { monsterCards } from '../../assets/cardPath1';
//import * as images from "../../assets/monster";
import images from '../../scripts/imageImports';

const DequeBuilding = () => {
  const [decks, setDecks] = useState(['Deck 1', 'Deck 2', 'Deck 3']);
  const [cards, setCards] = useState<Array<CardData>>([]);
  const [search, setSearch] = useState('');
  const [allCards, setAllCards] = useState<Array<CardData>>([]);

  useEffect(() => {
    getSampleCards();
  }, []);

  interface CardData {
    id : number,
    name : string,
    imageUrl : any
  }

  interface jsonResp {
    data : Array<string>
  }

  async function getSampleCards() {
    let cardIds : Array<CardData> = [];
    Object.keys(images).slice(1, 100).forEach((key : string, index : any) => {
      cardIds.push({
        id: index,
        name: key.split('.')[0].replace(/_/g, ' ').replace(/-/g, ' '),
        imageUrl: images[key as keyof typeof images]
      });
      console.log(index)
    });
    setCards(cardIds);
    Object.keys(images).forEach((key : string, index : any) => {
      cardIds.push({
        id: index,
        name: key.split('.')[0].replace(/_/g, ' ').replace(/-/g, ' '),
        imageUrl: images[key as keyof typeof images]
      });
      console.log(index)
    });
    setAllCards(cardIds)
  }

  
  const filteredCards = allCards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="deck-builder">
      <div className="decks-list">
        <h2>My Decks</h2>
        <ul>
          {decks.map(deck => (
            <li key={deck}>{deck}</li>
          ))}
        </ul>
      </div>
      <div className="cards-list">
        <h2>All Cards</h2>
        <input
          type="text"
          placeholder="Search cards..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="cards-grid">
          {filteredCards.map(card => (
            <Card key={card.id} name={card.name} imageUrl={card.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DequeBuilding;