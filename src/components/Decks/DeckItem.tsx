import React from "react";
import './Decks.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import useDeckStore from "../../store/deckStore";

interface DeckItemProps {
    name : string,
    isEditSet : any
}

export default function DeckItem({name, isEditSet} : DeckItemProps) {

    const deck = useDeckStore((state) => state.deck);
    const setDeck = useDeckStore((state) => state.setDeck);

    return (
        <li className="item">
            <p>{name}</p>
            <div className="buttons">
                <div className="buttonA" onClick={() => {isEditSet; setDeck({ name : name })}}>
                    <FontAwesomeIcon icon={faEdit}/>
                </div>
                <div className="buttonD">
                    <FontAwesomeIcon icon={faTrashCan}/>
                </div>
            </div>
        </li>
    )
}