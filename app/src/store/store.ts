import { IState } from "../types";
import races from "../data/races";

const initialStore = (async: boolean): IState => ({
  modalOpen: false,
  races: async ? [] : races,
});

export default initialStore;
