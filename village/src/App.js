import React, { Component } from 'react';

import './App.css';
import SmurfAdd from './components/SmurfAdd';
import SmurfEdit from './components/SmurfEdit';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  setSmurfs = (smurfs) => (
    this.setState({smurfs: smurfs})
  );
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({smurfs: res.data}))
      .catch(error => console.log(error));
  }
  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setSmurfs(res.data))
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <header>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </header>
        <Route exact path="/"
               render={props => <Smurfs {...props}
                                        deleteSmurf={this.deleteSmurf}
                                        smurfs={this.state.smurfs} />}/>
        <Route path="/smurf-form"
               render={props => <SmurfAdd {...props}
                                           setSmurfs={this.setSmurfs} />}/>
        <Route path="/smurf-edit/:id"
               render={props => <SmurfEdit {...props}
                                           initialSmurf={this.state.smurfs.find(
                                             ({id}) => id === parseInt(props.match.params.id, 10)
                                           )}
                                           setSmurfs={this.setSmurfs} />}/>
        <Route path="/smurf/:id"
               render={props => <Smurf {...props}
                                           {...this.state.smurfs.find(
                                             ({id}) => id === parseInt(props.match.params.id, 10)
                                           )}
                                           deleteSmurf={this.deleteSmurf} />}/>
      </div>
    );
  }
}

export default App;
