import axios from 'axios';
import config from '../../config';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_SERVICE_CATEGORIES = 'GET_SERVICE_CATEGORIES';

export const addTodoCart = (productDetails = {}) => ({
    type: 'ADD_TO_CART',
    item: productDetails
});

export const removeFromCart = (productDetails = {}) => ({
    type: 'REMOVE_FROM_CART',
    item: productDetails
});

export const getServiceCategories = (data) => ({
    type: 'GET_SERVICE_CATEGORIES',
    data
});


export function getCategoriesListAction(formData){
    console.log('formData:::: ',formData)
    return async dispatch => {        
        const data = {
            id: formData.select_category_service
        }
        const requestObj = {
            method: 'post',
            url: config.API_URL + config.API_GET_SERVICE_CATEGORIES,
            data,
            config: {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        };
        try {
            const requestPromise = await axios(requestObj);
            if(requestPromise.data.result && requestPromise.data.result.length) dispatch(getServiceCategories({id: formData.select_category_service, categories: requestPromise.data.result}));
            console.log('requestPromise::: ',requestPromise);
        } catch (error) {
            console.log('error::: ',error);
        }
    }
}