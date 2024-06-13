import React from "react";
import './CardEditor.css';
import Card from "../Card-Builder";

interface DeckEditorProps {
    name : string
    deckList : Array<CardData>,
    saveDeck : () => void,
    removeCard? : any; 
    handleClick : any;
    exitEditMode : () => void;
    deck : any;
}

interface CardData {
  id? : number,
  name? : string,
  type? : string,
  imageUrl?: string,
  frametype? : string,
  desc? : string,
  atk? : number,
  def? : number,
  level? : number,
  race? : string,
  attribute? : string
}

export default function DeckEditor({name, deckList, saveDeck, exitEditMode, removeCard, handleClick, deck} : DeckEditorProps) {
    return (
        <section className="editor">
            <div>
                <h2>{name} <div onClick={saveDeck} className="save-btn">Save</div><div onClick={exitEditMode} className="save-btn">Cancel</div></h2>
            </div>
            <div className="cards-grid">
              {deckList.map(card => (
                <div>
                  <Card key={card.id} name={card.name!} imageUrl={card.imageUrl!} isEdit={true} isInDeck={true} removeCard={removeCard} deck={deck} id={card.id}/>
                </div>
              ))}
            </div>
        </section>
    )
}