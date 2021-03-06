import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as mascotaActions from './actions/mascotaActions';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MascotasCreate from "./components/MascotasCreateForm/MascotasCreate";
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';

class App extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }
  
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Jumbotron/>
          <Route exact path="/" component={MascotasCreate}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

