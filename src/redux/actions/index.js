import { UPDATE_AUTHENTICATION,LOGOUT } from '../constants/action-types';

export const updateAuthentication=(jwt, name, email, picture)=> {
    let payload = {
        jwt: jwt,
        picture: picture,
        name: name,
        email: email
    }
    return { type: UPDATE_AUTHENTICATION, payload }
};

export const logout=()=> {
    return { type: LOGOUT}
};