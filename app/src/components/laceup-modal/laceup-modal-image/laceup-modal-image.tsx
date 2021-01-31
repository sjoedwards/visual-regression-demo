import React from "react";
import { IRace } from "../../../types";

interface ILaceupModalImage {
  race: IRace;
}

const LaceUpModalImage: React.FunctionComponent<ILaceupModalImage> = ({
  race,
}) => {
  const img = race?.image || `https://via.placeholder.com/150`;

  const customUrl = {
    backgroundImage: `url(${img})`,
  };
  return <div className="laceup__modal__image" style={customUrl} />;
};

export default LaceUpModalImage;
