import { GET_AUTH, SET_LOGIN } from '../constants';
import { api } from '../services/api';

export const getAuth = () => {
    return async (dispatch: any) => {
        try {
            const result = await api.post('auth/session-request', {
                system_api_key: '505763d6-4202-4b05-9efc-93b366939bcf',
            });

            dispatch({
                type: GET_AUTH,
                data: result.data.data,
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const login = (email: string, password: string) => {
    return async (dispatch: any, getState: any) => {
        try {
            const token = getState();

            const result = await api.post(
                'auth/session-register',
                {
                    organization_user: {
                        email,
                        password,
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${token.user.auth.access_key}`,
                    },
                }
            );

            dispatch({
                type: SET_LOGIN,
                data: { authenticate: true, data: result.data.data },
            });
        } catch (e) {
            console.log(e);
        }
    };
};
