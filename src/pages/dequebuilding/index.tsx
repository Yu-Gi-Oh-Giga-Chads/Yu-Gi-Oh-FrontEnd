import React, { useState, useEffect } from 'react';
import './DeckBuilder.css';
import Card from '../../components/Card-Builder';
import axios from 'axios';
import { monsterCards } from '../../assets/cardPath1';
import images from '../../scripts/imageImports';
import CardInfo from '../../components/Card-Info';
import Decks from '../../components/Decks';
import DeckEditor from '../../components/CardEditor';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import useUserStore from '../../store/userStore';
import useDeckStore from '../../store/deckStore';

interface CardData {
  id?: number;
  name?: string;
  imageUrl?: string;
  atk?: number;
  def?: number;
  effect?: string;
}

interface AllCards {
  data : Array<CardInfo>
}

interface CardInfo {
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
}

const DequeBuilding = () => {
  const [cards, setCards] = useState<Array<CardInfo>>([]);
  const [search, setSearch] = useState('');
  const [allCards, setAllCards] = useState<Array<CardInfo>>([]);
  const [selectedCard, setSelectedCard] = useState<CardInfo | null>();
  const [cardData, setCardData] = useState<AllCards>();
  const [editMode, setEditMode] = useState<boolean>(true);
  const [deckCards, setDeckCards] = useState<Array<CardInfo>>([]);

  const user = useUserStore((state) => state.user);
  const deck = useDeckStore((state) => state.deck);
  const setDeck = useDeckStore((state) => state.setDeck);

  useEffect(() => {
    async function getSampleCards() {
      let cardIds : Array<CardData> = [];
      Object.keys(images).slice(1, 100).forEach((key : string, index : any) => {
        let curIndex : number = 0;
        let cardName : string = key.split('.')[0].replace(/_/g, ' ').replace(/lvl/g, '').replace(/WATER/g, '').replace(/WIND/g, '').replace(/FIRE/g, '').replace(/EARTH/g, '').replace(/DARK/g, '').replace(/LIGHT/g, '').slice(0, key.split('.')[0].length-3);
        for(let i : number =0; i<cardData!.data.length; i++) {
          if(cardName.includes(cardData!.data[i].name!)) curIndex = i;
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
      setAllCards(cardIds)
    }
    async function getAllCards() {
      await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php').then(
        (resp : any) => {return resp.data}).then(
          (cardData : AllCards) => {
            let cardIds : Array<CardData> = [];
      Object.keys(images).slice(1,100).forEach((key : string, index : any) => {
        let curIndex : number = 0;
        let cardName : string = key.split('.')[0].replace(/_/g, ' ').replace(/lvl/g, '').replace(/WATER/g, '').replace(/WIND/g, '').replace(/FIRE/g, '').replace(/EARTH/g, '').replace(/DARK/g, '').replace(/LIGHT/g, '').slice(0, key.split('.')[0].length-3);
        for(let i : number =0; i<cardData!.data.length; i++) {
          if(cardName.includes(cardData!.data[i].name!)) curIndex = i;
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
      setAllCards(cardIds)
          }
        );
    }

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
  
  const isEditSet = () => {
    setEditMode(false);
  }

  const addCard = () => {
    let newDeck : Array<CardData> = JSON.parse(JSON.stringify(deckCards))
    newDeck.push({
      name : selectedCard!.name,
      imageUrl : selectedCard!.imageUrl,
      id : selectedCard!.id
    });
    setDeckCards(newDeck);
    setDeck({
      name : deck?.name,
      cards : deckCards
    })
  }

  async function sendToDB() {
    await axios.post('/adddeck', {
      data : deckCards
    })
  }

  const exitEditMode = () => {
    setEditMode(true);
  }

  const removeCard = () => {
    const newArr : Array<CardData> = JSON.parse(JSON.stringify(deckCards));
    setDeckCards(newArr.filter(cardI => cardI.id != selectedCard?.id));
    console.log(deckCards);
    console.log(selectedCard?.id)
  }

  const filteredCards = allCards.filter(card => card.name!.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="deck-builder">
      <Decks isEditSet={isEditSet}/>
      { editMode ? 
      (<div className="cards-list">
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
              <Card key={card.id} name={card.name} imageUrl={card.imageUrl} isEdit={false} isInDeck={false}/>
            </div>
          ))}
        </div>
      </div>)
      :
      (
        <>
          <DeckEditor name={deck?.name!} deckList={deckCards} saveDeck={sendToDB} exitEditMode={exitEditMode} removeCard={setDeckCards} handleClick={() => {return handleCardClick}} deck={deckCards}/>
          <div className="cards-list-inedit">
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
                  <Card key={card.id} name={card.name} imageUrl={card.imageUrl} isEdit={true} isInDeck={false}/>
                </div>
              ))}
            </div>
          </div>
      </>)
      }
      {selectedCard && (
        editMode ? <CardInfo card={selectedCard} onClose={handleCloseCardInfo} isEditMode={false}/>
        : <CardInfo card={selectedCard} onClose={handleCloseCardInfo} isEditMode={true} addCard={addCard}/>
      )}
    </div>
  );
};

export default DequeBuilding;