import { combineReducers } from 'redux';
import commonReducer from './containers/ShoppingPage/reducer';
import homeReducer from './containers/ImportantView/reducer';

export default combineReducers({
    commonReducer,
    homeReducer
});