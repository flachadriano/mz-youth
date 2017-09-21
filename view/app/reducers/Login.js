import * as service from '../services/Login';

// action types
const USER_TOKEN = 'USER_TOKEN';

// action executions
export const authenticate_user = (credentials) => (dispatch) =>
    service.login(credentials).then(data => {
        if (data.auth_token) {
            dispatch(userToken(data.auth_token));
        } else {
            dispatch(userToken())
            // TODO threat message error response
        }
    });

// action creators
const userToken = (auth_token) => ({
    type: USER_TOKEN,
    auth_token
});

// reducer
export default (state, action) => {
    switch(action.type) {
        case USER_TOKEN:
            return {...state, auth_token: action.auth_token};
        default:
            return state;
    }
}