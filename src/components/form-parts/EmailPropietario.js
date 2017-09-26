import React from 'react';
import PropTypes from 'prop-types';

const EmailPropietario = ({name, title}) => {
  return ( 
  	<div className="form-group">
      <label htmlFor={name}>{title}</label>
      <input className="form-control" id={name} type="email" name={name} placeholder={title} />
    </div>
  );
}

EmailPropietario.propTypes = {};

EmailPropietario.defaultTypes = {};

export default EmailPropietario;