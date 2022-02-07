import React from "react";
import Header from "../copmponents/Header";
import AddUserForm from "../copmponents/AddUserForm";
import { Card } from "react-bootstrap";

const AddUser = () => {
  return (
    <div className="container">
      <Header />
      <Card>
        <Card.Header>
          <div className="card-heading">
            <h5>Form</h5>
          </div>
        </Card.Header>
        <Card.Body>
          <AddUserForm />
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddUser;
