import React, { useState } from "react";
import './Hand.css';

interface HandProps {
    cards : Array<CardInfoProps>,
    isBack : boolean,
    setSelectedCard : React.Dispatch<React.SetStateAction<CardInfoProps | null>>
}

interface CardInfoProps {
    id : number,
    name: string;
    imageUrl: string;
    atk?: number;
    def?: number;
    effect?: string;
}

export default function Hand({cards, isBack, setSelectedCard} : HandProps) {
    
    const [showButtons, setShowButtons] = useState<boolean>(false);

    if(!isBack) return (
        <div className="cb_wrapper">
            {showButtons && 
                <div className="s_btns">
                    <div className="summon_btnA" onClick={() => setShowButtons(false)}><p>Normal summon</p></div>
                    <div className="summon_btnB" onClick={() => setShowButtons(false)}><p>Set</p></div>
                </div>
            }
            <div className="cards-front">
                {
                    cards.map(card => { return <img height={100} className="front-card" src={card.imageUrl} onClick={() => { setSelectedCard(card); setShowButtons(true) }}/>})
                }
            </div>
        </div>
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