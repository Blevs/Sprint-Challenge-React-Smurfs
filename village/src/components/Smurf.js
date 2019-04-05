import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = ({name, height, age, id, deleteSmurf}) => {
  return (
    <div className="Smurf">
      <Link to={`/smurf/${id}`}><h3>{name}</h3></Link>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <button onClick={() => deleteSmurf(id)}>&times;</button>
      <Link to={`/smurf-edit/${id}`}>Edit</Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

