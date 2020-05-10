import { UPDATE_AUTHENTICATION,LOGOUT } from '../constants/action-types';

const initialState = {
  jwt: "",
  picture: "",
  name: "",
  email: "",
  isAuthenticated: false
};

function rootReducer(state = initialState, action) {
  let payload=action.payload
  if (action.type === UPDATE_AUTHENTICATION) {
     state={
      jwt: payload.jwt,
      picture: payload.picture,
      name: payload.name,
      email: payload.email,
      isAuthenticated: true
    };
  }
  if (action.type === LOGOUT) {
    state={
      jwt: "",
      picture: "",
      name: "",
      email: "",
      isAuthenticated: false
   };
 }
  return state;
};

export default rootReducer;