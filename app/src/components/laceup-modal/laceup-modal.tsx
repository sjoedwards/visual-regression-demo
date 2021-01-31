import Modal, { Styles } from "react-modal";
import React from "react";
import LaceUpModalImage from "./laceup-modal-image/laceup-modal-image";
import LaceUpModalMetrics from "./laceup-modal-metrics/laceup-modal-metrics";
import LaceUpModalDescription from "./laceup-modal-description/laceup-modal-description";
import { IRace } from "../../types";

Modal.setAppElement("html");

interface ILaceUpModal {
  modalOpen: boolean;
  race: IRace;
  toggleModal: () => void;
  customStyle: Styles;
}

const LaceUpModal: React.FunctionComponent<ILaceUpModal> = ({
  modalOpen,
  customStyle,
  toggleModal,
  race,
}) => {
  return (
    <Modal
      isOpen={modalOpen}
      closeTimeoutMS={200}
      onRequestClose={() => toggleModal()}
      style={customStyle}
      contentLabel="Race Info Modal"
    >
      {race && (
        <div className="laceup__row">
          <div className="laceup__modal__container">
            <div className="laceup__row">
              <LaceUpModalImage race={race} />
              <LaceUpModalMetrics race={race} />
            </div>
            <div className="laceup__row">
              <LaceUpModalDescription />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default LaceUpModal;
