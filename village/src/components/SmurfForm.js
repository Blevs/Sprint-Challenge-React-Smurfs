import React from 'react';

const SmurfForm = ({values, onSubmit, onChange}) => {
  return (
      <div className="SmurfForm">
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            placeholder="name"
            value={values.name}
            name="name"
          />
          <input
            onChange={onChange}
            type="number"
            placeholder="age"
            value={values.age}
            name="age"
          />
          <input
            onChange={onChange}
            placeholder="height"
            value={values.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
  );
};

export default SmurfForm;
