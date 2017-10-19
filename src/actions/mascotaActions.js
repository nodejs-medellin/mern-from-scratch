import * as types from './actionTypes';
import {saveMascota} from '../apis/ApiService';


export const setMascota = (mascota)=>{
  return {type: types.SET_MASCOTA, mascota};
};



export const saveMascotaAction = (mascota)=>{
  return (dispatch)=>{
    return saveMascota(mascota)
      .then((response)=>{
        dispatch(setMascota(response));
      });
  };
};