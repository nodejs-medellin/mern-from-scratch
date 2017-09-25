import React from 'react';
import PropTypes from 'prop-types';

const MascotasPropietarioEmail = ({controlName, controlTitle, controlPlaceH}) => {
  return (
    <div className="form-group">
      <label htmlFor={controlName}>{controlTitle}</label>
      <input className="form-control" id={controlName} type="email" name={controlName} placeholder={controlPlaceH}/>
    </div>
  );
};

MascotasPropietarioEmail.propTypes = {};
MascotasPropietarioEmail.defaultTypes = {};
export default MascotasPropietarioEmail;
