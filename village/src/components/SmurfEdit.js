import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SmurfForm from './SmurfForm';

const SmurfEdit = ({initialSmurf, setSmurfs, history}) => {
  const [smurf, setSmurf] = useState(initialSmurf);
  useEffect(() => setSmurf(initialSmurf), [initialSmurf]);
  const editSmurf = event => {
    event.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => setSmurfs(res.data))
      .catch(error => console.log(error));
    history.push("/");
  };
  const handleInputChange = event => {
    setSmurf({...smurf, [event.target.name]: event.target.value});
  };
  return (
    <div>
      <h1>Edit Smurf</h1>
      {smurf
          ? <SmurfForm values={smurf}
            onSubmit={editSmurf}
            onChange={handleInputChange}
            buttonText="Edit smurf" />
        : <div>Loading...</div>}
    </div>
  );
};

export default SmurfEdit;
