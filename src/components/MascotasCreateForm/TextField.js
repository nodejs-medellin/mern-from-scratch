import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => {
  return ( 
  	<div className="form-group">
      <label htmlFor={props.name}>{props.title}</label>
      <input
        onChange={props.onChange}
        className="form-control"
        id={props.name}
        type="text"
        name={props.name}
        placeholder={props.title}
        value={props.value}
      />
    </div>
  );
}

TextField.propTypes = {
  value: PropTypes.string
};

TextField.defaultProps = {
  value: ''
};

export default TextField;