import React from 'react';
import PropTypes from 'prop-types';

const EmailField = (props) => {
  return ( 
  	<div className="form-group">
    	<label htmlFor={props.name}>{props.title}</label>
    	<input 
        onChange={props.onChange}
        className="form-control" 
        id={props.name} 
        type="email" 
        name={props.name} 
        placeholder={props.title}
        value={props.value}
      />
    </div>
  );
}

EmailField.propTypes = {
  value: PropTypes.string
};

EmailField.defaultProps = {
  value: ''
};

export default EmailField;