import { combineReducers } from 'redux';
import categoryReducer from './category';
import addressReducer from './address';
import adReducer from './ad';
import restaurantReducer from './restaurant';
import cartReducer from './cart';

const rootReducer = combineReducers({
  categoryReducer,
  addressReducer,
  adReducer,
  restaurantReducer,
  cartReducer,
})

export default rootReducer;