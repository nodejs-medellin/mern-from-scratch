import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => {
  return ( 
  	<div className="form-group">
      <label htmlFor={props.name}>{props.title}</label>
      <input className="form-control" id={props.name} type="text" name={props.name} placeholder={props.title} />
    </div>
  );
}

TextField.propTypes = {};

TextField.defaultTypes = {};

export default TextField;