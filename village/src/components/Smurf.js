import React from 'react';
import { Link } from 'react-router-dom';
import './Smurf.scss';
import { ReactComponent as Pencil } from './pencil.svg';

const Smurf = ({name, height, age, id, deleteSmurf}) => {
  return (
    <div className="Smurf">
      <Link to={`/smurf/${id}`}><h3>{name}</h3></Link>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <button className="delete" onClick={() => deleteSmurf(id)}>&times;</button>
      <Link className="edit" to={`/smurf-edit/${id}`}><Pencil/></Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

