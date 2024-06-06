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
import InGameInfo from "../Card-Info-Ingame";

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

const sampleArr : Array<CardData> = [
    {
        id : 1,
        name : "3-Hump Lacooda",
        imageUrl : img1,
        atk : 69,
        def : 69,
        effect : "YOOOOO"
    },
    {
        id : 2,
        name : "30,000-Year White Turtle",
        imageUrl : img2,
        atk : 69,
        def : 69,
        effect : "YOOOOO"
    },
    {
        id : 3,
        name : "4-Starred Ladybug of Doom",
        imageUrl : img3,
        atk : 69,
        def : 69,
        effect : "YOOOOO"
    },
    {
        id : 4,
        name : "7 Colored Fish",
        imageUrl : img4,
        atk : 69,
        def : 69,
        effect : "YOOOOO"
    },
] 
export default function PlayingField() {

    const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

    const handleCardClick = (card: CardData) => {
        setSelectedCard(card);
    };

    const handleCloseCardInfo = () => {
        setSelectedCard(null);
    };

    return (
        <section className="whole">
            {selectedCard && <InGameInfo card={selectedCard}/>}
            <section className="wrapper">
                <Hand cards={sampleArr} isBack={true} setSelectedCard={setSelectedCard}/>
                <div className="player2">
                    <div className="extra_deck">
                        <CardField card={selectedCard}/>
                        <CardField card={selectedCard}/>
                    </div>
                    <div>
                        <div className="main-row">
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                        </div>
                        <div className="main-row">
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                        </div>
                    </div>
                    <div className="graveyard">
                        <CardField card={selectedCard}/>
                        <CardField card={selectedCard}/>
                        <CardField card={selectedCard}/>
                    </div>
                </div>
                <div className="middle_cards">
                    <CardField card={selectedCard}/>
                    <CardField card={selectedCard}/>
                </div>
                <div className="player1">
                    <div className="extra_deck">
                        <CardField card={selectedCard}/>
                        <CardField card={selectedCard}/>
                    </div>
                    <div>
                        <div className="main-row">
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                        </div>
                        <div className="main-row">
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                            <CardField card={selectedCard}/>
                        </div>
                    </div>
                    <div className="graveyard">
                        <CardField card={selectedCard}/>
                        <CardField card={selectedCard}/>
                        <CardField card={selectedCard}/>
                    </div>
                </div>
                <Hand cards={sampleArr} isBack={false} setSelectedCard={setSelectedCard}/>
            </section>
        </section>
    )
}