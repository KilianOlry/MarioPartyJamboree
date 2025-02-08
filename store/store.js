import { create } from 'zustand';
import {boards} from "../model/BoardsModel";

export const generateRandom = create((set) => ({
  randomNumber: null,
  generateRandomNumber: () => {
    const random = Math.floor(Math.random() * boards.length);
    set({ randomNumber: random });
  },
}));

export const boardToshow = create((set) => ({
  boardToShow: null,
  setBoardToShow: (value) => set({ boardToShow: value }),
}));

