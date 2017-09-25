import React from 'react';
import PropTypes from 'prop-types';

const MascotasTypes = ({controlName, controlTitle}) => {
  return (
    <div className="form-group">
      <label htmlFor={controlName}>{controlTitle}</label>
      <select className="form-control" id={controlName} name={controlName}>
        <option value="" disabled>Seleccione...</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="tortuga">Tortuga</option>
        <option value="onitorrinco">Onitorrinco</option>
      </select>
    </div>
  );
};

MascotasTypes.propTypes = {};
MascotasTypes.defaultTypes = {};
export default MascotasTypes;
