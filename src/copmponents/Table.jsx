import { Table } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import TableSkeleton from "./TableSkeleton";
import DelModal from "./DelModal";
import { useHistory } from "react-router-dom";
import { getUsers } from "../actions/userActions";

const UserTable = ({ users: { users, loading } }) => {
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();
  const edit = (e, data) => {
    e.preventDefault();
    history.push({ pathname: "/add-user", state: data });
  };
  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  useEffect(() => {
    // setLoading();
    getUsers();
  }, []);
  return (
    <Fragment>
      <Table responsive striped={!loading}>
        <thead>
          <tr>
            <th onClick={() => console.log(loading)}>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {loading ||
          (users.length === 0 && (
            <tbody>
              <TableSkeleton />
            </tbody>
          ))}
        <tbody>
          {users.length > 0 &&
            !loading &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address && user.address.city}</td>
                <td>
                  <button
                    onClick={(e) => edit(e, user)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => toggleModal(e)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <DelModal
        showModal={showModal}
        closeModal={(e) => toggleModal(e)}
        deleteUser={(e) => toggleModal(e)}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, getUsers)(UserTable);
