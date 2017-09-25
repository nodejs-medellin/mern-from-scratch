import React from 'react';
import PropTypes from 'prop-types';

const MascotasSubmit = ({controlTitle}) => {
  return (
    <div className="form-group">
      <button className="btn btn-default" type="submit">{controlTitle}</button>
    </div>
  );
};

MascotasSubmit.propTypes = {};
MascotasSubmit.defaultTypes = {};
export default MascotasSubmit;
