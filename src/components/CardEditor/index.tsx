import React from "react";
import './CardEditor.css';
import Card from "../Card-Builder";

interface DeckEditorProps {
    deckList : Array<CardData>,
    saveDeck : any
}

interface CardData {
    id: number;
    name: string;
    imageUrl: string;
    atk?: number;
    def?: number;
    effect?: string;
}

export default function DeckEditor({deckList, saveDeck} : DeckEditorProps) {
    return (
        <section className="editor">
            <div>
                <h2>Deck 1 <div onClick={saveDeck} className="save-btn">Save</div></h2>
            </div>
            <div className="cards-grid">
              {deckList.map(card => (
                <div>
                  <Card key={card.id} name={card.name} imageUrl={card.imageUrl} isEdit={true}/>
                </div>
              ))}
            </div>
        </section>
    )
}