import React from 'react';
import PropTypes from 'prop-types';
import MascotasTypes from './form-controls-mascotas/MascotasTypes';
import MascotasNombre from './form-controls-mascotas/MascotasNombre';
import MascotasSubmit from './form-controls-mascotas/MascotasSubmit';
import MascotasPropietario from './form-controls-mascotas/MascotasPropietario';
import MascotasPropietarioEmail from './form-controls-mascotas/MascotasPropietarioEmail';

const MascotasCreate = () => {
  return (
    <div className="row marketing">
      <div className="col-lg-12">
        <h1 id="dashboard-title">Crear Mascota</h1>
        <form>
          <MascotasNombre controlName='mascota' controlTitle='Nombre de la mascota' controlPlaceH='Ej: Homero'/>
          <MascotasTypes controlName='tipo' controlTitle='Tipo de mascota'/>
          <MascotasPropietario controlName='propietario' controlTitle='Nombre del propietario' controlPlaceH='Ej: Pepito Perez'/>
          <MascotasPropietarioEmail controlName='email'  controlTitle='Email del propietario' controlPlaceH='Ej: pepitoperez@email.com'/>
          <MascotasSubmit controlTitle='Crear' controlPlaceH='Ej: Homero'/>
        </form>
      </div>
    </div>
  );
};

MascotasCreate.propTypes = {};
MascotasCreate.defaultTypes = {};
export default MascotasCreate;
