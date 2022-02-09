import { useHistory } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { addUser, updateUser } from "../actions/userActions";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const AddUserForm = ({ addUser, updateUser }) => {

  const [error, setError] = useState("");
  const [validationMessage, setValidationMessage] = useState(false)
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();
  const {location: {state}} = history 
  const [userData, setUserData] = useState({ name: state.name || "", email: state.email ||"" });

  const cancel = (e) => {
    e.preventDefault();
    history.push({
      pathname:"/",
      state: {save: false}
    });
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.name) {
      setShowAlert(true);
      setError("Please esnure you have filled both name and email fields");
    } else if(!state.id){
      addUser(userData, () => history.push({
        pathname:"/",
        state: {save: true}
      }));
    } else {
      updateUser(state.id, ()=>history.push({
        pathname:"/",
        state: {save: true}
      }))
    }
  };

  useEffect(()=>{
    setValidationMessage(validateEmail(userData.email))
  }, [userData.email])

  

  return (
    <form>
      {showAlert && <Alert variant="danger">{error}</Alert>}
      <div class="mb-3 form-item">
        <label for="Name" class="form-label">
          Name
        </label>
        <input
          defaultValue={history.location.state.name}
          onChange={(e) => {
            setUserData({ ...userData, name: e.target.value });
            setShowAlert(false);
          }}
          type="text"
          class="form-control"
        />
      </div>
      <div>
        <div class="mb-3 form-item">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            defaultValue={history.location.state.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
              setValidationMessage(validateEmail(userData.email))
              setShowAlert(false);
            }}
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
       {!validationMessage && <div className='validation-message'>Please enter a valid email</div>}
        
      </div>

      <div className="action">
        <button onClick={(e) => cancel(e)} className="btn cancel">
          Cancel
        </button>
        <button disabled={!validationMessage}
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default connect(null, { addUser, updateUser })(AddUserForm);
