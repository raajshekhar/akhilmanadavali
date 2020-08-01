import axios from 'axios';
import config from '../../config';

export const GET_SERVICES = 'GET_SERVICES';

const getServices = (data) => {
    return {
        type: GET_SERVICES,
        data
    }
};


export const getServicesAction = () => {
    return async dispatch => {
        try {
            const requestApi = await axios.get(config.API_URL + config.API_URL_GET_SERVICE);
            dispatch(getServices(requestApi.data.result));
        } catch (error) {
            console.log('error: ',error);
        }
    }
};