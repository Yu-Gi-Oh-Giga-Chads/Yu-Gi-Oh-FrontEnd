import React from "react";
import { useState } from "react";
import './Decks.css';
import DeckItem from "./DeckItem";
import useUserStore from "../../store/userStore";

interface DecksProps {
    isEditSet : any
}

interface User {
    username: string;
    email?: string;
    password: string;
    decks? : Array<Deck>
}

interface Deck {
    id? : number,
    name : string,
    cards? : Array<CardInfo>,
    dateCreated? : Date
}

interface CardInfo {
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

export default function Decks({isEditSet} : DecksProps) {

    const user = useUserStore((state) => state.user);
    const [decks, setDecks] = useState<Array<Deck> | null>(user?.decks ? user.decks : [{ name : "Sample Deck"}]);

    return (
    <div className="decks-list">
        <h2>My Decks</h2>
        <ul>
            {decks?.map(deck => (
                <DeckItem name={deck.name} isEditSet={isEditSet}/>
            ))}
        </ul>
    </div>
    )
}