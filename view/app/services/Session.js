import { post } from '../utils/Request';

export const login = data => post('/apis/users/sign_in', data);