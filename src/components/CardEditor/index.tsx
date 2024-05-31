import React from "react";
import './CardEditor.css';
import Card from "../Card-Builder";

interface DeckEditorProps {
    deckList : Array<CardData>,
    saveDeck : () => void,
    exitEditMode : () => void
}

interface CardData {
    id: number;
    name: string;
    imageUrl: string;
    atk?: number;
    def?: number;
    effect?: string;
}

export default function DeckEditor({deckList, saveDeck, exitEditMode} : DeckEditorProps) {
    return (
        <section className="editor">
            <div>
                <h2>Deck 1 <div onClick={saveDeck} className="save-btn">Save</div><div onClick={exitEditMode} className="save-btn">Cancel</div></h2>
            </div>
            <div className="cards-grid">
              {deckList.map(card => (
                <div>
                  <Card key={card.id} name={card.name} imageUrl={card.imageUrl} isEdit={true} isInDeck={true}/>
                </div>
              ))}
            </div>
        </section>
    )
}