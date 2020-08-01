import { GET_SERVICES } from './action';

const initialState = {
    services: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return { ...state, services: action.data }
        default:
            return state;
    }
};

export const getHomePageServices = (state) => state.homeReducer.services;

export default homeReducer;