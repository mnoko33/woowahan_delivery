import { combineReducers } from 'redux';
import categoryReducer from './category';
import addressReducer from './address';
import adReducer from './ad';
import restaurantReducer from './restaurant';

const rootReducer = combineReducers({
  categoryReducer,
  addressReducer,
  adReducer,
  restaurantReducer,
})

export default rootReducer;