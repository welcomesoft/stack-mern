import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  // muestra los datos una vez que el componente ha sido montado
  async componentDidMount() {
    this.updateList();
  }

  // verifica cada actualizacion en el
  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  // actualiza la lista
  updateList = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
  };

  fieldClean() {
    this.setState({ username: "" });
  }

  onSubmit = async (e) => {
    // evita que se refresque el navegador
    e.preventDefault();
    // hace la peticion post al backend
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    // actualiza la lista
    this.updateList();
    // limpia el campo username
    this.fieldClean();
  };

  deleteUser = async (id) => {
    await axios.delete("http://localhost:4000/api/users/" + id);
    this.updateList();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h4 className="card-title text-dark">Create new user</h4>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </form>
            <button type="submit" className="btn btn-primary mt-2">
              Save &nbsp;
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person-plus-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id.toString()}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-person-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                  <path
                    fillRule="evenodd"
                    d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                  />
                </svg>{" "}
                &nbsp;
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
