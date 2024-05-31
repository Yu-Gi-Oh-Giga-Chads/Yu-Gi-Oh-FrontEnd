import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faInfo, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './DeckCardModifier.css';

interface DeckCardModifierProps {
    removeCard? : () => void,
    showInfo? : () => void
}

export default function DeckCardModifier({removeCard, showInfo} : DeckCardModifierProps) {
    return (
        <div className="container">
            <div className="button-wrapper">
                <div className="buttonA" onClick={removeCard}>
                    <FontAwesomeIcon icon={faInfo}/>
                </div>
                <div className="buttonB" onClick={showInfo}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                </div>
            </div>
        </div>
    )
}