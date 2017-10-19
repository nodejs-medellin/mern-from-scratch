import {combineReducers} from 'redux';
import mascotas from './mascotaReducer';


const rootReducer = combineReducers({
  mascotas
});

export default rootReducer;