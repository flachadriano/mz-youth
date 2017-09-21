const USER_TOKEN = 'USER_TOKEN';

export const userToken = (auth_token) => ({
    type: USER_TOKEN,
    auth_token
});

export default (state, action) => {
    switch(action.type) {
        case USER_TOKEN:
            return {...state, auth_token: action.auth_token};
        default:
            return state;
    }
}