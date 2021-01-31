import React, { useReducer, useEffect } from "react";
import "./App.css";
import LaceUpBanner from "./components/laceup-banner/laceup-banner";
import store from "./store/store";
import reducer, { LaceUpReducer } from "./reducer/reducer";
import { ActionTypeName, IRace } from "./types";
import races from "./data/races";
import LaceUpRaceTile from "./components/laceup-race-tile/laceup-race-tile";
import LaceUpModal from "./components/laceup-modal/laceup-modal";
import LaceupLoader from "./components/laceup-loader/laceup-loader";

const async = window.location.search.match("async")?.length;

const initialStore = store(Boolean(async));

const customStyle = {
  content: {
    margin: "20px",
    position: "static" as const,
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    minWidth: "200px",
    background: "none",
    border: "none",
    height: "500px",
    padding: "0 20px",
  },
};

const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer<LaceUpReducer>(reducer, initialStore);

  useEffect(() => {
    (async () =>
      new Promise((resolve) => {
        return (
          async &&
          setTimeout(() => {
            resolve(
              dispatch({ type: ActionTypeName.UPDATE_RACES, payload: races })
            );
          }, 3000)
        );
      }))();
  }, []);

  const renderRaceTiles = () => {
    return state.races.map((race: IRace, index: number) => {
      /* eslint-disable-next-line no-console */
      console.log("Content Loaded");
      return (
        <LaceUpRaceTile
          key={race.title}
          id={index}
          race={race}
          selectTile={(id: number): void =>
            dispatch({ type: ActionTypeName.SELECT_RACE, payload: id })
          }
        />
      );
    });
  };
  return (
    <div className="App">
      {state.selectedRace && (
        <LaceUpModal
          race={state.selectedRace}
          modalOpen={state.modalOpen}
          customStyle={customStyle}
          toggleModal={() =>
            dispatch({ type: ActionTypeName.TOGGLE_MODAL, payload: undefined })
          }
        />
      )}
      <LaceUpBanner />
      <div className="main laceup__row">
        {state?.races?.length ? renderRaceTiles() : <LaceupLoader />}
      </div>
      <div className="laceup__footer__container">
        <div>
          <span>Icons made by </span>
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          <span> from </span>
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          <span>Icons made by </span>
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>
          <span> from </span>
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          <span>Icons made by </span>
          <a
            href="https://www.flaticon.com/authors/vitaly-gorbachev"
            title="Vitaly Gorbachev"
          >
            Vitaly Gorbachev
          </a>
          <span> from </span>
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
