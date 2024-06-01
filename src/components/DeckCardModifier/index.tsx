import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faInfo, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './DeckCardModifier.css';
import CardInfo from "../Card-Info";

interface DeckCardModifierProps {
    id?: number;
    name: string;
    imageUrl: string;
    atk?: number;
    def?: number;
    effect?: string;
    removeCard? : any,
    showInfo? : () => void,
}

export default function DeckCardModifier({id, name, imageUrl, atk, def, effect, removeCard, showInfo} : DeckCardModifierProps) {

    const [showInformation, setShowInfo] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<DeckCardModifierProps | null>();

    const handleCardClick = () => {
        setSelectedCard({name : "a", imageUrl : 'a'});
    };
    
    const handleCloseCardInfo = () => {
        setSelectedCard(null);
    };

    function showInfor() {
        setShowInfo(true);
        console.log('hi')
    }
    return (
        <>
            <div className="container">
                <div className="button-wrapper">
                    <div className="buttonA" onClick={showInfor}>
                        <FontAwesomeIcon icon={faInfo}/>
                    </div>
                    <div className="buttonB" onClick={removeCard}>
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </div>
                </div>
            </div>
            {showInformation && <CardInfo card={{name : name, imageUrl : imageUrl, atk : atk, def : def, effect : effect}} isEditMode={false} onClose={handleCloseCardInfo}/>}
        </>
    )
}