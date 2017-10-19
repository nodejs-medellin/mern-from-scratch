import React from 'react';
import PropTypes from 'prop-types';

const SelectField = (props) => {
  return ( 
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <select 
        onChange={props.onChange}
        value={props.value} 
        className="form-control" 
        id={props.name} 
        name={props.name}>
        <option value="" disabled>seleccione</option>
        <option value="perro">perro</option>
        <option value="gato">gato</option>
        <option value="tortuga">tortuga</option>
        <option value="onitorrinco">onitorrinco</option>
      </select>
    </div>          
  );
}

SelectField.propTypes = {
  value: PropTypes.string
};

SelectField.defaultProps = {
  value: ''
};

export default SelectField;