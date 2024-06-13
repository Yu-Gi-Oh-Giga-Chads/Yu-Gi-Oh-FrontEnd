import create from 'zustand';

interface DeckStore {
    deck: Deck | null;
    setDeck: (deck: Deck) => void;
    clearDeck: () => void;
}

interface CardInfo {
    name : string,
    type : string,
    frametype? : string,
    desc : string,
    atk : number,
    def : number,
    level : number,
    race : string,
    attribute : string
}

interface Deck {
    id? : number,
    name? : string,
    cards? : Array<CardInfo>,
    dateCreated? : Date
}

const useDeckStore = create<DeckStore>((set) => ({
    deck: null,
    setDeck: (deck) => set({ deck }),
    clearDeck: () => set({ deck: null }),
  }));
  
export default useDeckStore;