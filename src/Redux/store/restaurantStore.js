import { createStore } from 'redux';
import { restaurantReducer } from "../reducers/restaurentManageReducer";


export const restaurentStore = createStore(restaurantReducer);

