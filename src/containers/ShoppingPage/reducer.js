import { ADD_TO_CART, REMOVE_FROM_CART, GET_SERVICE_CATEGORIES } from './action';

const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNtJmjuPtrxw9PzpShyk2DQXNk6qRjzl7myhPBzVIEZqgdgGlO&usqp=CAU';

const initialState = {
    categoryServices: {
        data: [
            {id: 1, name: 'One', time: 20, amount: 200, max: 10, path:image},
            {id: 2, name: 'Two', time: 20, amount: 200, max: 10, path:image}
        ]
    },
    cartCost: 0,
    serviceCategories: {}
};


const commonReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            if(!action.item.id) return state;
            state.categoryServices.data = state.categoryServices.data.map((data) => {
                if(data.id === action.item.id) {
                    data.count = data.count || 0;
                    data.count = data.count + 1;
                    state.cartCost = state.cartCost + Number(data.amount);
                    state.cartCost = Number(state.cartCost.toFixed(2));
                    return data
                } else return data
            });
            return { ...state };
        case REMOVE_FROM_CART:
            if(!action.item.id) return state;
            console.log(REMOVE_FROM_CART, state)
            state.categoryServices.data = state.categoryServices.data.map((data) => {
                if(data.id === action.item.id && data.count) {
                    data.count = data.count || 0;
                    data.count = data.count - 1;
                    state.cartCost = state.cartCost - Number(data.amount);
                    state.cartCost = Number(state.cartCost.toFixed(2));
                    return data
                } else return data
            });
            return { ...state };
        case GET_SERVICE_CATEGORIES:
            console.log('GET_SERVICE_CATEGORIES:: ',action)
            const serviceCategories = {...state.serviceCategories};
            serviceCategories[action.data.id] = action.data.categories;
            return {
                ...state,
                serviceCategories: {
                    ...serviceCategories
                }
            }
        default:
            return state;
    }
}

export const getCategoryServiceItems = state => state.commonReducer.categoryServices.data || [];
export const getCartAmount = state => state.commonReducer.cartCost;
export const getAllServiceCategories = state => state.commonReducer.serviceCategories;

export default commonReducer;