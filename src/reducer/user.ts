import { IAuth, IAuthAction, IUser, IUserAction } from '../types';
import { GET_AUTH, SET_LOGIN } from '../constants';

const initialState: IAuth | IUser = {
    auth: [],
    user: [],
};

export const userReducer = (
    state = initialState,
    action: IAuthAction | IUserAction
): IAuth | IUser => {
    switch (action.type) {
        case GET_AUTH:
            return {
                auth: {...state , auth: action.data},
            };
        case SET_LOGIN:
            return {
                user: {...state, user: action.data},
            };
        default:
            return state;
    }
};
