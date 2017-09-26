import React from 'react';
import PropTypes from 'prop-types';

const SubmitMascota = ({type}) => {
  return ( 
  	<button className="btn btn-default" type={type}>Submit</button>
  );
}

SubmitMascota.propTypes = {};

SubmitMascota.defaultTypes = {};

export default SubmitMascota;