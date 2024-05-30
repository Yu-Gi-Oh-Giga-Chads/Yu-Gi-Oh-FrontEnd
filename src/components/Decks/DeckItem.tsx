import React from "react";
import './Decks.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface DeckItemProps {
    name : string,
    isEditSet : any
}

export default function DeckItem({name, isEditSet} : DeckItemProps) {
    return (
        <li className="item">
            <p>{name}</p>
            <div className="buttons">
                <div className="buttonA" onClick={isEditSet}>
                    <FontAwesomeIcon icon={faEdit}/>
                </div>
                <div className="buttonD">
                    <FontAwesomeIcon icon={faTrashCan}/>
                </div>
            </div>
        </li>
    )
}