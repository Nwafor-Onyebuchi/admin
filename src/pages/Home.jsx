import React from "react";
import Header from "../copmponents/Header";
import { Card } from "react-bootstrap";
import UserTable from "../copmponents/Table";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const goToForm = (e) => {
    e.preventDefault();
    history.push("/add-user");
  };
  return (
    <div className="container">
      <Header />
      <Card>
        <Card.Header>
          <div className="card-heading">
            <h5>User List</h5>
            <button onClick={(e) => goToForm(e)} className="btn btn-primary">
              Add User
            </button>
          </div>
        </Card.Header>
        <Card.Body>
          <UserTable />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
