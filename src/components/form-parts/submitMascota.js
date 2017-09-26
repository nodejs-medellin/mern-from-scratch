import React from 'react';
import PropTypes from 'prop-types';

const submitMascota = (type) => {
  return ( 
  	<button className="btn btn-default" type={type}>Submit</button>
  );
}

submitMascota.propTypes = {};

submitMascota.defaultTypes = {};

export default submitMascota;