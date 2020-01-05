import { IPets, IPetsAction } from '../types';
import { GET_PETS } from '../constants';

const initialState: IPets = {
    pets: [],
};

export const petsReducer = (
    state = initialState,
    action: IPetsAction
): IPets => {
    switch (action.type) {
        case GET_PETS:
            return {
                ...state,
                pets: action.data,
            };
        default:
            return state;
    }
};
