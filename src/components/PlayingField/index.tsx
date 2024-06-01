import React, { useState } from 'react';
import './PlayingField.css';
import Card from './Card';
import Hand from '../Hand';
//this is just to test the field visually
import img1 from '../../assets/monster/3-Hump Lacooda_Beast_Effect Monster_lvl3_EARTH.jpg';
import img2 from '../../assets/monster/30,000-Year White Turtle_Aqua_Normal Monster_lvl5_WATER.jpg';
import img3 from '../../assets/monster/4-Starred Ladybug of Doom_Insect_Flip Effect Monster_lvl3_WIND.jpg';
import img4 from '../../assets/monster/7 Colored Fish_Fish_Normal Monster_lvl4_WATER.jpg';
import img5 from '../../assets/monster/8-Claws Scorpion_Insect_Effect Monster_lvl2_DARK.jpg';
import img6 from '../../assets/monster/A Cat of Ill Omen_Beast_Flip Effect Monster_lvl2_DARK.jpg';

interface CardData {
  id: number;
  name: string;
  imageUrl: string;
  atk?: number;
  def?: number;
  effect?: string;
}

interface Player {
  id: number;
  name: string;
  hand: CardData[];
  deck: CardData[];
  field: CardData[];
}

const PlayingField = ({ player1, player2 }: { player1: Player; player2: Player }) => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(player1);
  const [opponentPlayer, setOpponentPlayer] = useState<Player>(player2);

  const switchTurns = () => {
    setCurrentPlayer(prevPlayer => (prevPlayer.id === player1.id ? player2 : player1));
    setOpponentPlayer(prevPlayer => (prevPlayer.id === player1.id ? player1 : player2));
  };

  const drawCard = (player: Player) => {
    const newDeck = [...player.deck];
    const drawnCard = newDeck.shift();
    if (drawnCard) {
      player.hand.push(drawnCard);
    }
    if (player.id === currentPlayer.id) {
      setCurrentPlayer({ ...player, deck: newDeck });
    } else {
      setOpponentPlayer({ ...player, deck: newDeck });
    }
  };

  return (
    <section className='wrapper'>
        <Hand isBack={true} cards={[img1, img2, img3, img4, img5, img6]}/>
        <div className='horizontal'>
            <img className='deck' src='https://orig00.deviantart.net/9c03/f/2013/196/d/3/yugioh_card_back_v2_by_endergon_oscuro-d6dlsyg.jpg'/>
            <div className='field'>
            </div>
        </div>
        {
            //the actual cards should be fetched, this is just an example!
        }
        <Hand isBack={false} cards={[img1, img2, img3, img4, img5, img6]}/>
    </section>
  );
};

export default PlayingField;
