import * as service from '../services/Login';

// action types
const USER_TOKEN = 'USER_TOKEN';

// action executors
export const authenticateUser = (credentials) => (dispatch) =>
    service.login(credentials).then(data => {
        if (data.auth_token) {
            dispatch(userToken(data.auth_token));
        } else {
            dispatch(userToken())
            // TODO threat message error response
        }
    });

// action creators
const userToken = (authToken) => ({
    type: USER_TOKEN,
    authToken
});

// reducer
export default (state = {}, action) => {
    switch(action.type) {
        case USER_TOKEN:
            return { ...state, authToken: action.authToken };
        default:
            return state;
    }
}