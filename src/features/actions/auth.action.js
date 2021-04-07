import {AUTH_CONSTANTS} from '../constants';

export const login = () => {
  return {type: AUTH_CONSTANTS.LOGIN};
};

export const logout = () => {
  return {type: AUTH_CONSTANTS.LOGOUT};
};
