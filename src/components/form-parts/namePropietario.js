import React from 'react';
import PropTypes from 'prop-types';

const namePropietario = ({name, title}) => {
  return ( 
  	<div className="form-group">
      <label htmlFor={name}>{title}</label>
      <input className="form-control" id={name} type="text" name={name} placeholder={title} />
    </div>
  );
}

namePropietario.propTypes = {};

namePropietario.defaultTypes = {};

export default namePropietario;