import create from 'zustand';

interface User {
    username: string;
    email?: string;
    password: string;
    decks? : Array<Deck>
}
  
interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
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
    id : number,
    name : string,
    cards : Array<CardInfo>,
    dateCreated? : Date
}

const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  }));
  
export default useUserStore;