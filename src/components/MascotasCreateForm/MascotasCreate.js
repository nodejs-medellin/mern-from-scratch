import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import EmailField from './EmailField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';

class MascotasCreate extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mascota: {
        propietario: '',
        mascota: '',
        email: '',
        tipo: ''
      }
    };
    this._handleMascotaState = this._handleMascotaState.bind(this);
  }
  
  _handleMascotaState(event) {
    let mascota = Object.assign({}, this.state.mascota);
    let field= event.target.name;
    mascota[field] = event.target.value;
    this.setState({
      mascota
    });
  }
  
  render() {
    return (
      <div className="row marketing">
        <div className="col-lg-12">
          <h1 id="dashboard-title">crear mascota 1</h1>
          <form>
            <TextField
              onChange={this._handleMascotaState}
              title="Nombre Propietario"
              name="propietario"
              value={this.state.mascota.propietario}
            />
            <TextField 
              onChange={this._handleMascotaState}
              title="Nombre Mascota" 
              name="mascota"
              value={this.state.mascota.mascota}
            />
            <EmailField 
              onChange={this._handleMascotaState}
              title="Email" 
              name="email"
              value={this.state.mascota.email}
            />
            <SelectField 
              onChange={this._handleMascotaState}
              title="Tipo de Mascota" 
              name="tipo"
              value={this.state.mascota.tipo}
            />
            <SubmitButton type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

MascotasCreate.propTypes = {};

MascotasCreate.defaultTypes = {};

export default MascotasCreate;
