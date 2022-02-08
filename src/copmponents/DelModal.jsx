import React from "react";
import { Modal } from "react-bootstrap";

const DelModal = ({ closeModal, deleteUser, showModal }) => {
  return (
    <Modal show={showModal} onHide={deleteUser}>
      <Modal.Header>
        <h6>Delete?</h6>
      </Modal.Header>
      <Modal.Body>
        <h6>You are about to delete user with id 4?</h6>
      </Modal.Body>
      <Modal.Footer>
        <div className="action">
          <button onClick={closeModal} className="btn btn-default">
            Cancel
          </button>
          <button onClick={closeModal} type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default DelModal;
