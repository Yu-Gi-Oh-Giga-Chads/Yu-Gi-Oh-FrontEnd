import React, { useState, useEffect } from 'react';
import './DeckBuilder.css';
import Card from '../../components/Card-Builder';

const DequeBuilding = () => {
  const [decks, setDecks] = useState(['Deck 1', 'Deck 2', 'Deck 3']);
  const [cards, setCards] = useState<Array<CardData>>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getSampleCards();
  }, []);

  interface CardData {
    id : number,
    name : string,
    imageUrl : string
  }
  function getSampleCards() {
    let cardIds : Array<CardData> = [];
    for(let i=501000000; i<501000100; i++) {
        cardIds.push({
            id : i,
            name : i.toString(),
            imageUrl : 'https://images.ygoprodeck.com/images/cards/' + i + ".jpg"
        });
    }
    setCards(cardIds);
  }

  
  const filteredCards = cards.filter(card => card.name.toLowerCase().includes(search.toLowerCase()));

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