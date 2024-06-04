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
    deck? : Array<any>,
    showInfo? : () => void,
}

export default function DeckCardModifier({id, name, imageUrl, atk, def, effect, removeCard, showInfo, deck} : DeckCardModifierProps) {

    const [showInformation, setShowInfo] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<DeckCardModifierProps | null>({id : id, name : name, imageUrl : imageUrl});

    setSelectedCard({id : id, name : name, imageUrl : imageUrl});

    const handleCardClick = () => {
        setSelectedCard({id : id, name : name, imageUrl : imageUrl});
    };
    
    const handleCloseCardInfo = () => {
        setSelectedCard(null);
    };

    function deleteC() {
        const newArr : Array<any> = JSON.parse(JSON.stringify(deck));
        removeCard(newArr.filter(cardI => cardI.id != selectedCard?.id));
        console.log(deck);
        console.log(selectedCard?.id)
    }

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
                    <div className="buttonB" onClick={deleteC}>
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </div>
                </div>
            </div>
            {showInformation && <CardInfo card={{name : name, imageUrl : imageUrl, atk : atk, def : def, effect : effect}} isEditMode={false} onClose={handleCloseCardInfo}/>}
        </>
    )
}