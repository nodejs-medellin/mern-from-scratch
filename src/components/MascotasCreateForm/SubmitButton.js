import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = (props) => {
  return (
    <div className="form-group"> 
  		<button className="btn btn-default" type={props.type}>Submit</button>
  	</div>
  );
}

SubmitButton.propTypes = {};

SubmitButton.defaultTypes = {};

export default SubmitButton;
