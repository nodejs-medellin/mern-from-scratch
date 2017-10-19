import * as types from '../actions/actionTypes';

const mascotaReducer = (state = {}, action) => {
    switch(action.type) {
        case types.SET_MASCOTA:
            return  Object.assign({}, state, {
                mascota: Object.assign({}, action.mascota)
            });
        default:
            return state;
    }
};

export default mascotaReducer;
