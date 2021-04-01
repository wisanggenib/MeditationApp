import {AUTH_CONSTANTS} from '../constants';

const defaultState = {
  isLogin: false,
};

const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case AUTH_CONSTANTS.LOGIN:
      return {...state, isLogin: true};
    default:
      return state;
  }
};

export default reducer;
