import {create} from 'zustand';
import {boards} from "../model/BoardsModel";

export const generateRandomStore = create((set, get) => ({
  randomNumber: null,
  generateRandomNumber: () => {
    let random;
    const currentRandomNumber = get().randomNumber;
    do {
      random = Math.floor(Math.random() * boards.length);
    } while (random === currentRandomNumber);
    set({randomNumber: random});
  },
}));

export const gameToShowStore = create((set) => ({
  gameToShow: null,
  setGameToShow: (value) => set({gameToShow: value}),
}));

