import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    title: "",
    content: "",
    userSelected: "",
    date: new Date(),
    editing: false,
    _id: "",
  };

  async componentDidMount() {
    const users = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: users.data,
      userSelected: users.data[0].username,
    });

    if (this.props.match.params.id) {
      const note = await axios.get(
        "http://localhost:4000/api/notes/" + this.props.match.params.id
      ); 

      this.setState({
        title: note.data.title,
        userSelected: note.data.author,
        content: note.data.content,
        date: new Date(note.data.date),
        editing: true,
        _id: this.props.match.params.id,
      })
    }
  }

  onSubmit = async (e) => {
    // evita que se recarge el formulario
    e.preventDefault();

    if (this.state.editing) {
      await axios.put("http://localhost:4000/api/notes/" + this.state._id, {
        title: this.state.title,
        content: this.state.content,
        author: this.state.userSelected,
        date: this.state.date,
      });
    } else {
      await axios.post("http://localhost:4000/api/notes", {
        title: this.state.title,
        content: this.state.content,
        author: this.state.userSelected,
        date: this.state.date,
      });
    }

    this.clearInputs();
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({ date });
  };

  clearInputs = () => {
    this.setState({
      title: "",
      content: "",
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Create Note</h4>
            <form onSubmit={this.onSubmit}>
              {/* Select User */}
              <div className="form-group">
                <select
                  className="form-control"
                  name="userSelected"
                  onChange={this.onInputChange}
                >
                  {this.state.users.map((user) => (
                    <option key={user._id} value={user.username}>
                      {user.username}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titulo"
                  name="title"
                  onChange={this.onInputChange}
                  value={this.state.title}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="Contenido"
                  onChange={this.onInputChange}
                  value={this.state.content}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <DatePicker
                  className="form-control"
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
