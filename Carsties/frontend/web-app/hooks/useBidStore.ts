import { Bid } from "@/types";
import { create } from "zustand";

type State = {
  bids: Bid[];
};

type Actions = {
  setBids: (bids: Bid[]) => void;
  addBid: (bid: Bid) => void;
};

const initialState: State = { bids: [] };

export const useBidStore = create<State & Actions>((set) => ({
  ...initialState,

  setBids: (bids: Bid[]) => {
    set(() => ({ bids }));
  },

  addBid: (bid: Bid) => {
    set((state) => ({
      bids: !state.bids.find((x) => x.id === bid.id)
        ? [bid, ...state.bids]
        : [...state.bids],
    }));
  },
}));
