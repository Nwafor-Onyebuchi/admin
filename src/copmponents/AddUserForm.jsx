import { useHistory } from "react-router-dom";
import "../App.css";

const AddUserForm = () => {
  const history = useHistory();
  const cancel = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <form>
      <div class="mb-3 form-item">
        <label for="Name" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" />
      </div>
      <div>
        <div class="mb-3 form-item">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <div className="action">
        <button onClick={(e) => cancel(e)} className="btn cancel">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
