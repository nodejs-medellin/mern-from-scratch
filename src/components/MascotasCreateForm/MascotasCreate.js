import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import EmailField from './EmailField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';

const MascotasList = () => {
  return (
    <div className="row marketing">
      <div className="col-lg-12">
        <h1 id="dashboard-title">crear mascota 1</h1>
        <form>
          <TextField title="Nombre Propetario" name="propetario"/>
          <TextField title="Nombre Mascota" name="mascota"/>
          <EmailField title="Email" name="email"/>
          <SelectField title="Tipo de Mascota" name="tipo"/>
          <SubmitButton type="submit"/>
        </form>
      </div>
    </div>
  );
};

MascotasList.propTypes = {};

MascotasList.defaultTypes = {};

export default MascotasList;
