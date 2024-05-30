import React from "react";
import { useState } from "react";
import './Decks.css';
import DeckItem from "./DeckItem";

interface DecksProps {
    isEditSet : any
}

export default function Decks({isEditSet} : DecksProps) {

    const [decks, setDecks] = useState(['Deck 1', 'Deck 2', 'Deck 3']);

    return (
    <div className="decks-list">
        <h2>My Decks</h2>
        <ul>
            {decks.map(deck => (
                <DeckItem name={deck} isEditSet={isEditSet}/>
            ))}
        </ul>
    </div>
    )
}