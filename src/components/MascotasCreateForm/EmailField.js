import React from 'react';
import PropTypes from 'prop-types';

const EmailField = (props) => {
  return ( 
  	<div className="form-group">
    	<label htmlFor={props.name}>{props.title}</label>
    	<input className="form-control" id={props.name} type="email" name={props.name} placeholder={props.title}/>
    </div>
  );
}

EmailField.propTypes = {};

EmailField.defaultTypes = {};

export default EmailField;