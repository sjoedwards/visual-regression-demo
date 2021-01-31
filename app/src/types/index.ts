import React from "react";

export enum ActionTypeName {
  TOGGLE_MODAL = "TOGGLE_MODAL",
  SELECT_RACE = "SELECT_RACE",
  UPDATE_RACES = "UPDATE_RACES",
}

interface ActionType<T extends ActionTypeName, P> {
  type: T;
  payload: P;
}

export interface IState {
  modalOpen: boolean;
  races: IRace[];
  selectedRace?: IRace;
}

export type ActionTypes =
  | ActionType<ActionTypeName.UPDATE_RACES, IRace[]>
  | ActionType<ActionTypeName.SELECT_RACE, number>
  | ActionType<ActionTypeName.TOGGLE_MODAL, undefined>;

export interface IRace {
  title: string;
  image: string;
  distance: {
    short: string;
    long: string;
  };
  incline: {
    description: string;
    score: number;
  };
  overall: {
    description: string;
    score: number;
  };
}
