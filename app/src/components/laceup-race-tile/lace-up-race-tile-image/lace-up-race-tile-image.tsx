import React from "react";
import { IRace } from "../../../types";

interface ILaceUpRaceTileImage {
  race: IRace;
}

const LaceUpRaceTileImage: React.FunctionComponent<ILaceUpRaceTileImage> = ({
  race,
}) => {
  const img = race?.image || `https://via.placeholder.com/150`;

  const customUrl = {
    backgroundImage: `url(${img})`,
  };
  return <div className="laceup__race-tile__image" style={customUrl} />;
};

export default LaceUpRaceTileImage;
