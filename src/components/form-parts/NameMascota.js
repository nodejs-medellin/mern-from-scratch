import React from 'react';
import PropTypes from 'prop-types';

const NameMascota = ({name, title}) => {
  return ( 
  	<div className="form-group">
      <label htmlFor={name}>{title}</label>
      <input className="form-control" id={name} type="text" name={name} placeholder={title} />
    </div>
  );
}

NameMascota.propTypes = {};

NameMascota.defaultTypes = {};

export default NameMascota;