import React from 'react';
import PropTypes from 'prop-types';

const nameMascota = (name, title) => {
  return ( 
  	<div className="form-group">
      <label htmlFor={name}>{title}</label>
      <input className="form-control" id={name} type="text" name={name} placeholder={title} />
    </div>
  );
}

nameMascota.propTypes = {};

nameMascota.defaultTypes = {};

export default nameMascota;