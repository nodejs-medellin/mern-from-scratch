import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const MascotasList = () => {
  return (
    <div>
      <Header/>
      <div className="jumbotron">
        <h1>Mis mascotas</h1>
      </div>
      <div className="row marketing">
        <div className="col-lg-12">
          <h1 id="dashboard-title">crear mascota</h1>
          <form>
            <div className="form-group">
              <label htmlFor="propietario">Nombre Propietario</label>
              <input className="form-control" id="propietario" type="text" name="propietario" placeholder="Propietario"/>
            </div>
            <div className="form-group">
              <label htmlFor="mascota">Nombre Mascota</label>
              <input className="form-control" id="mascota" type="text" name="mascota" placeholder="Propietario"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control" id="email" type="email" name="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="tipo">Tipo de mascota</label>
              <select className="form-control" id="tipo" name="tipo">
                <option value="" disabled>seleccione</option>
                <option value="perro">perro</option>
                <option value="gato">gato</option>
                <option value="tortuga">tortuga</option>
                <option value="onitorrinco">onitorrinco</option>
              </select>
            </div>
            <button className="btn btn-default" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>© 2017 Camilo, Inc.</p>
      </footer>
    </div>
  );
};

MascotasList.propTypes = {};

MascotasList.defaultTypes = {};

export default MascotasList;
