import { Table } from "react-bootstrap";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import TableSkeleton from "./TableSkeleton";
import DelModal from "./DelModal";
import { useHistory } from "react-router-dom";

const UserTable = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();
  const edit = () => {
    history.push("/add-user");
  };
  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      );
      setLoading(false);
      setUser(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Fragment>
      <Table responsive striped={!loading}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {loading && (
          <tbody>
            <TableSkeleton />
          </tbody>
        )}
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
                  <button onClick={(e) => edit(e)} className="btn btn-warning">
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

export default UserTable;
