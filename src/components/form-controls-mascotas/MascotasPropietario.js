import React from 'react';
import PropTypes from 'prop-types';

const MascotasPropietario = ({controlName, controlTitle, controlPlaceH}) => {
  return (
    <div className="form-group">
      <label htmlFor={controlName}>{controlTitle}</label>
      <input className="form-control" id={controlName} type="text" name={controlName} placeholder={controlPlaceH}/>
    </div>
  );
};

MascotasPropietario.propTypes = {};
MascotasPropietario.defaultTypes = {};
export default MascotasPropietario;
