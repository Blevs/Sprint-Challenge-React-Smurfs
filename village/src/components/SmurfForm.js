import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {};
    event.target.querySelectorAll('input').forEach(e => smurf[e.name] = e.value);
    smurf.age = parseInt(smurf.age, 10);
    if (smurf.name !== "" && smurf.age && smurf.height !== "") {
      axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => this.props.setSmurfs(res.data))
        .catch(error => console.log(error));
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            type="number"
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
