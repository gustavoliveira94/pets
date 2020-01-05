import { GET_PETS } from '../constants';
import { api } from '../services/api';

export const getPets = (
    sex: string,
    age: string,
    size: string,
    page: number,
    order: string
) => {
    return async (dispatch: any, getState: any) => {
        try {
            const token = getState();

            const result = await api.post(
                'pet/search',
                {
                    search: {
                        sex_key: sex || [],
                        size_key: size || [],
                        age_key: age || [],
                        _fields: [
                            'id',
                            'uuid',
                            'custom_code',
                            'name',
                            'specie_id',
                            'breed_primary_id',
                            'price',
                            'created_date',
                            'status_key',
                            'branch_id',
                            'payment_model_key',
                            'sex_key',
                            'size_key',
                            'age_key',
                        ],
                        specie: {
                            with: {
                                _fields: ['id', 'name'],
                            },
                        },
                        breed_primary: {
                            with: {
                                _fields: ['id', 'name'],
                            },
                        },
                        branch: {
                            with: {
                                uuid: 'ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff',
                                _fields: ['id', 'uuid'],
                            },
                        },
                    },
                    options: {
                        page,
                        sort: order ? [order] : [],
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${token.user.user.data.access_key}`,
                    },
                }
            );

            console.log(result);

            dispatch({
                type: GET_PETS,
                data: result.data.data,
            });
        } catch (e) {
            console.log(e);
        }
    };
};
