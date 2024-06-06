import React, { useState } from "react";
import CardField from "./CardField";
import './PlayingField.css';
import Hand from "../Hand";
import img8 from '../../assets/monster/A-Assault Core_Machine_Union Effect Monster_lvl4_LIGHT.jpg';
//this is just to test the field visually
import img1 from '../../assets/monster/3-Hump Lacooda_Beast_Effect Monster_lvl3_EARTH.jpg';
import img2 from '../../assets/monster/30,000-Year White Turtle_Aqua_Normal Monster_lvl5_WATER.jpg';
import img3 from '../../assets/monster/4-Starred Ladybug of Doom_Insect_Flip Effect Monster_lvl3_WIND.jpg';
import img4 from '../../assets/monster/7 Colored Fish_Fish_Normal Monster_lvl4_WATER.jpg';
import img5 from '../../assets/monster/8-Claws Scorpion_Insect_Effect Monster_lvl2_DARK.jpg';
import img6 from '../../assets/monster/A Cat of Ill Omen_Beast_Flip Effect Monster_lvl2_DARK.jpg';

const sample = {
    imageUrl : img8
}

interface CardData {
    id: number;
    name: string;
    imageUrl: string;
    atk?: number;
    def?: number;
    effect?: string;
}

export default function PlayingField() {

    const [selectedCard, setSelectedCard] = useState<CardData | null>();

    const handleCardClick = (card: CardData) => {
        setSelectedCard(card);
    };

    const handleCloseCardInfo = () => {
        setSelectedCard(null);
    };

    return (
        <section className="whole">
            <div>
                
            </div>
            <section className="wrapper">
                <Hand cards={[img1, img2, img3, img4, img5]} isBack={true}/>
                <div className="player2">
                    <div className="extra_deck">
                        <CardField isEmpty={false}/>
                        <CardField isEmpty={false}/>
                    </div>
                    <div>
                        <div className="main-row">
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                        </div>
                        <div className="main-row">
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                        </div>
                    </div>
                    <div className="graveyard">
                        <CardField isEmpty={false}/>
                        <CardField isEmpty={false}/>
                        <CardField isEmpty={false}/>
                    </div>
                </div>
                <div className="middle_cards">
                    <CardField isEmpty={false}/>
                    <CardField isEmpty={false}/>
                </div>
                <div className="player1">
                    <div className="extra_deck">
                        <CardField isEmpty={false}/>
                        <CardField isEmpty={false}/>
                    </div>
                    <div>
                        <div className="main-row">
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                        </div>
                        <div className="main-row">
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                            <CardField isEmpty={false}/>
                        </div>
                    </div>
                    <div className="graveyard">
                        <CardField isEmpty={false}/>
                        <CardField isEmpty={false}/>
                        <CardField isEmpty={false}/>
                    </div>
                </div>
                <Hand cards={[img1, img2, img3, img4, img5]} isBack={false}/>
            </section>
        </section>
    )
}