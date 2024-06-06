import React, { useState } from "react";
import './CardField.css';

interface CardFieldProps {
    card : Card | null
}

interface Card {
    id : number,
    name : string,
    imageUrl : string
    atk? : number,
    def? : number,
    effect? : string,
}

export default function CardField({card} : CardFieldProps) {

    const [currentCard, setCurrentCard] = useState<Card | null>(null);

    function setCard() {
        setCurrentCard(card!);
    }

    return (
        <div className="field" onClick={setCard}>
            {currentCard && <img className="cardA" src={currentCard?.imageUrl}/>}
        </div>
    )
}