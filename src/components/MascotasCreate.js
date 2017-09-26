import React from 'react';
import PropTypes from 'prop-types';
import namePropietario from './form-parts/namePropietario';
import nameMascota from './form-parts/nameMascota';
import emailPropietario from './form-parts/emailPropietario';
import typeMascota from './form-parts/typeMascota';
import submitMascota from './form-parts/submitMascota';

const MascotasCreate = () => {

  return (
    <div className="row marketing">
      <div className="col-lg-12">
        <h1 id="dashboard-title">Crear Mascota</h1>
        <form>
          <namePropietario title="Nombre Propetario" name="propetario"/>
          <nameMascota title="Nombre Mascota" name="mascota"/>
          <emailPropietario title="Email" name="email"/>
          <typeMascota title="Tipo de Mascota" name="tipo"/>
          <submitMascota type="submit"/>
        </form>
      </div>
    </div>
  );
};

MascotasCreate.propTypes = {};
MascotasCreate.defaultTypes = {};
export default MascotasCreate;
