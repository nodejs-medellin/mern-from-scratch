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
        propietario: 'piero'
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
              name="propetario"
            />
            <TextField title="Nombre Mascota" name="mascota"/>
            <EmailField title="Email" name="email"/>
            <SelectField title="Tipo de Mascota" name="tipo"/>
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
