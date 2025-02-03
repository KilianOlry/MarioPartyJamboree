import { create } from 'zustand';
import {boards} from "../model/BoardsModel";

export const useStore = create((set) => ({
  randomNumber: null,
  generateRandomNumber: () => {
    const random = Math.floor(Math.random() * boards.length);
    set({ randomNumber: random });
  },
}));
