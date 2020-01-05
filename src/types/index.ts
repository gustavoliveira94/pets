import { GET_AUTH, SET_LOGIN, GET_PETS } from '../constants';

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

export interface IPets {
    pets: object;
}

export interface IPetsAction {
    type: typeof GET_PETS;
    data: IPets;
}
