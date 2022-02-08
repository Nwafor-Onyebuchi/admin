import React from "react";
import { Modal } from "react-bootstrap";
import { connect } from 'react-redux'
import { deleteUser} from '../actions/userActions'

const DelModal = ({ closeModal, showModal, id, deleteUser}) => {
  return (
    <Modal show={showModal} onHide={closeModal} centered>
      <Modal.Header>
        <h4>Delete</h4>
      </Modal.Header>
      <Modal.Body>
        <h6>You are about to delete user number {id}? Are you sure about this?</h6>
      </Modal.Body>
      <Modal.Footer>
        <div className="action">
          <button onClick={closeModal} className="btn btn-default">
            Cancel
          </button>
          <button onClick={()=>deleteUser(id, ()=>closeModal())} type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default connect(null, {deleteUser})(DelModal);
