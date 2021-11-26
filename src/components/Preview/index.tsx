import React from "react";
import Modal from "react-modal";
import Grid from "../Grid";


Modal.setAppElement("#root");

type PreviewProps = {
  isOpen: boolean;
  closeModal: () => void;
};

function Preview({ isOpen, closeModal }: PreviewProps) {
  return (
      <Modal
        className="flex items-center justify-center is-dark is-rounded nes-dialog w-2/3"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Preview Modal"
        overlayClassName="bg-none fixed inset-0 flex items-center justify-center"
      >
        <Grid />
       
          <menu className="dialog-menu">
            <button onClick={closeModal} className="nes-btn">Cancel</button>
            <button className="nes-btn is-primary">Confirm</button>
          </menu>
      </Modal>
  );
}

export default Preview;
