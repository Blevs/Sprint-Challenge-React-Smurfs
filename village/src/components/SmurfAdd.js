import React, { Component } from 'react';
import axios from 'axios';
import SmurfForm from './SmurfForm';

class SmurfAdd extends Component {
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
    const smurf = {name: this.state.name,
                   age: parseInt(this.state.age, 10),
                   height: this.state.height};
    if (smurf.name !== "" && smurf.age && smurf.height !== "") {
      axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => this.props.setSmurfs(res.data))
        .catch(error => console.log(error));
      this.setState({
        name: '',
        age: '',
        height: ''
      });
      this.props.history.push("/");
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add Smurf</h1>
        <SmurfForm
          onSubmit={this.addSmurf}
          values={this.state}
          onChange={this.handleInputChange}
          buttonText="Add to village" />
      </div>
    );
  }
}

export default SmurfAdd;
