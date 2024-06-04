import React from "react";
import CardField from "./CardField";
import './PlayingField.css';
import img8 from '../../assets/monster/A-Assault Core_Machine_Union Effect Monster_lvl4_LIGHT.jpg';

const sample = {
    imageUrl : img8
}
export default function PlayingField() {
    return (
        <section className="wrapper">
            <CardField isEmpty={true} card={sample}/>
        </section>
    )
}