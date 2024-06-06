import React from "react";
import './InGameInfo.css';

interface CardInfoProps {
    card: {
      name: string;
      imageUrl: string;
      atk?: number;
      def?: number;
      effect?: string;
    };
}

export default function InGameInfo({card} : CardInfoProps) {
    return (
        <div className="wrapperA">
            <img className="cardimg" src={card.imageUrl}/>
            <div className="texts">
                <h1 className="title">{card.name}</h1>
                <h3 className="ad">ATK : {card.atk}</h3>
                <h3 className="ad">DEF : {card.def}</h3>
                <p className="effect">Effect : {card.effect}</p>
            </div>
        </div>
    )
}