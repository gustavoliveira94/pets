import { IAuth, IAuthAction, IUser, IUserAction } from '../types';
import { GET_AUTH, SET_LOGIN } from '../constants';

const initialState: IAuth | IUser = {
    auth: [],
    user: {
        authenticate: false,
        data: [],
    },
};

export const userReducer = (
    state = initialState,
    action: IAuthAction | IUserAction
): IAuth | IUser => {
    switch (action.type) {
        case GET_AUTH:
            return {
                ...state,
                auth: action.data,
            };
        case SET_LOGIN:
            return {
                ...state,
                user: action.data,
            };
        default:
            return state;
    }
};
