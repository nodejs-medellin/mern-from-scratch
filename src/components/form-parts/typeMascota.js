import React from 'react';
import PropTypes from 'prop-types';

const typeMascota = (name, title) => {
  return ( 
	<div className="form-group">
		<label htmlFor={name}>{title}</label>
		<select className="form-control" id={name} name={name}>
			<option value="" disabled>seleccione</option>
			<option value="perro">perro</option>
			<option value="gato">gato</option>
			<option value="tortuga">tortuga</option>
			<option value="onitorrinco">onitorrinco</option>
		</select>
	</div>
  );
}

typeMascota.propTypes = {};

typeMascota.defaultTypes = {};

export default typeMascota;