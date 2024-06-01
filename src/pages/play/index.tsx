import React from "react";
import DeckCardModifier from "../../components/DeckCardModifier";
import PlayingField from "../../components/PlayingField";
import './play.css';

const player1 = {
    id: 1,
    name: 'Player 1',
    hand: [],
    deck: [], // populate with card data
    field: []
  };
  
  const player2 = {
    id: 2,
    name: 'Player 2',
    hand: [],
    deck: [], // populate with card data
    field: []
  };

export default function Play() {
    return (
        <main>
            <PlayingField player1={player1} player2={player2}/>
        </main>
    )
}