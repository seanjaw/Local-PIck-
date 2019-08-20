import {combineReducers} from 'redux'; 
import userFlatlistReducer from './userflatlist';
import counterReducer from './counter';

const allReducers = combineReducers({
    userFlatlist: userFlatlistReducer,
    counter: counterReducer

})
export default allReducers;