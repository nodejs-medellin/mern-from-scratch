import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import EmailField from './EmailField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mascotaActions from '../../actions/mascotaActions';

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
    this._saveMascota = this._saveMascota.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.mascota !== 'undefined' &&
    this.state.mascota !== nextProps.mascota) {
      this.setState({
          mascota: nextProps.mascota
      });
    }
  }
  
  _handleMascotaState(event) {
    let mascota = Object.assign({}, this.state.mascota);
    let field= event.target.name;
    mascota[field] = event.target.value;
    this.setState({
      mascota
    });
  }

  _saveMascota(event) {
    event.preventDefault();
    if(this.state.mascota &&
        this.state.mascota.propietario &&
        this.state.mascota.propietario.length &&
        this.state.mascota.mascota &&
        this.state.mascota.mascota.length &&
        this.state.mascota.tipo &&
        this.state.mascota.tipo.length) {
      let mascota = Object.assign({}, this.state.mascota);
      this.props.actions.saveMascotaAction(mascota)
          .then(()=>{

          })
          .catch((err)=>{

          })
    }
  }

  render() {
    return (
      <div className="row marketing">
        <div className="col-lg-12">
          <h1 id="dashboard-title">crear mascota 1</h1>
          <form
              onSubmit={this._saveMascota}
          >
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

const mapStateToProps = (state, ownProps) => {
  return {
      mascota: state.mascotas.mascota
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(mascotaActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MascotasCreate);
