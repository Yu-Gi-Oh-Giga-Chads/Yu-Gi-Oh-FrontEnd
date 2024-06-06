import React from "react";
import './Hand.css';

interface HandProps {
    cards : Array<string>,
    isBack : boolean
}

export default function Hand({cards, isBack} : HandProps) {
    
    if(!isBack) return (
        <section className="cards-front">
            {
                cards.map(card => {return <img height={100} className="front-card" src={card}/>})
            }
        </section>
    )
    else {
        return (
            <section className="cards-back">
            {
                cards.map(card => {return <img height={100} className="back-card" src='https://orig00.deviantart.net/9c03/f/2013/196/d/3/yugioh_card_back_v2_by_endergon_oscuro-d6dlsyg.jpg'/>})
            }
            </section>
        )
    }
}