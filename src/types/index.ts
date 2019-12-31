import { GET_AUTH, SET_LOGIN } from '../constants';

export interface IAuth {
    auth: object;
}

export interface IAuthAction {
    type: typeof GET_AUTH;
    data: IAuth;
}

export interface IUser {
    user: object;
}

export interface IUserAction {
    type: typeof SET_LOGIN;
    data: IUser;
}
