import React, { useState, useEffect } from 'react';
import './DeckBuilder.css';
import Card from '../../components/Card-Builder';
import axios from 'axios';
import { monsterCards } from '../../assets/cardPath1';
//import * as images from "../../assets/monster";
import images from '../../scripts/imageImports';
import CardInfo from '../../components/Card-Info';

interface CardData {
  id: number;
  name: string;
  imageUrl: string;
  atk?: number;
  def?: number;
  effect?: string;
}

interface AllCards {
  data : Array<ApiCardInfo>
}

interface ApiCardInfo {
  name : string,
  type : string,
  frametype? : string,
  desc : string,
  atk : number,
  def : number,
  level : number,
  race : string,
  attribute : string
}

const DequeBuilding = () => {
  const [decks, setDecks] = useState(['Deck 1', 'Deck 2', 'Deck 3']);
  const [cards, setCards] = useState<Array<CardData>>([]);
  const [search, setSearch] = useState('');
  const [allCards, setAllCards] = useState<Array<CardData>>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>();
  const [cardData, setCardData] = useState<AllCards>();

  useEffect(() => {
    async function getSampleCards() {
      let cardIds : Array<CardData> = [];
      Object.keys(images).slice(1, 100).forEach((key : string, index : any) => {
        let curIndex : number = 0;
        let cardName : string = key.split('.')[0].replace(/_/g, ' ').replace(/lvl/g, '').replace(/WATER/g, '').replace(/WIND/g, '').replace(/FIRE/g, '').replace(/EARTH/g, '').replace(/DARK/g, '').replace(/LIGHT/g, '').slice(0, key.split('.')[0].length-3);
        for(let i : number =0; i<cardData!.data.length; i++) {
          if(cardName.includes(cardData!.data[i].name)) curIndex = i;
        }
        cardIds.push({
          id: index,
          name: cardName,
          imageUrl: images[key as keyof typeof images],
          atk : cardData!.data[curIndex].atk,
          def : cardData!.data[curIndex].def,
          effect : cardData!.data[curIndex].desc
        });
      });
      setCards(cardIds);
      /*Object.keys(images).forEach((key : string, index : any) => {
        cardIds.push({
          id: index,
          name: key.split('.')[0].replace(/_/g, ' ').replace(/-/g, ' '),
          imageUrl: images[key as keyof typeof images]
        });
      });*/
      setAllCards(cardIds)
    }
    async function getAllCards() {
      await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php').then(
        (resp : any) => {return resp.data}).then(
          (cardData : AllCards) => {
            let cardIds : Array<CardData> = [];
      Object.keys(images).forEach((key : string, index : any) => {
        let curIndex : number = 0;
        let cardName : string = key.split('.')[0].replace(/_/g, ' ').replace(/lvl/g, '').replace(/WATER/g, '').replace(/WIND/g, '').replace(/FIRE/g, '').replace(/EARTH/g, '').replace(/DARK/g, '').replace(/LIGHT/g, '').slice(0, key.split('.')[0].length-3);
        for(let i : number =0; i<cardData!.data.length; i++) {
          if(cardName.includes(cardData!.data[i].name)) curIndex = i;
        }
        cardIds.push({
          id: index,
          name: cardName,
          imageUrl: images[key as keyof typeof images],
          atk : cardData!.data[curIndex].atk,
          def : cardData!.data[curIndex].def,
          effect : cardData!.data[curIndex].desc
        });
      });
      setCards(cardIds);
      /*Object.keys(images).forEach((key : string, index : any) => {
        cardIds.push({
          id: index,
          name: key.split('.')[0].replace(/_/g, ' ').replace(/-/g, ' '),
          imageUrl: images[key as keyof typeof images]
        });
      });*/
      setAllCards(cardIds)
          }
        );
    }
    //getSampleCards();
    getAllCards();
  }, []);

  interface jsonResp {
    data : Array<string>
  }



  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
  };

  const handleCloseCardInfo = () => {
    setSelectedCard(null);
  };
  
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
            <div onClick={() => handleCardClick(card)}>
              <Card key={card.id} name={card.name} imageUrl={card.imageUrl}/>
            </div>
          ))}
        </div>
      </div>
      {selectedCard && (
        <CardInfo card={selectedCard} onClose={handleCloseCardInfo} />
      )}
    </div>
  );
};

export default DequeBuilding;