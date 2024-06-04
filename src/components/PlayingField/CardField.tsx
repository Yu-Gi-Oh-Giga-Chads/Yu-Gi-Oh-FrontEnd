import React from "react";
import './CardField.css';

interface CardFieldProps {
    card? : Card,
    isEmpty : boolean
}

interface Card {
    name? : string,
    atk? : number,
    def? : number,
    imageUrl : string
}

export default function CardField({card, isEmpty} : CardFieldProps) {
    return (
        <div className="field">
            {isEmpty! && <img className="card" src={card?.imageUrl}/>}
        </div>
    )
}