import { combineReducers } from 'redux';
import categoryReducer from './category';
import addressReducer from './address';
import adReducer from './ad';
import restaurantReducer from './restaurant';
import cartReducer from './cart';
import userConfirmReducer from './userConfirm';

const rootReducer = combineReducers({
  categoryReducer,
  addressReducer,
  adReducer,
  restaurantReducer,
  cartReducer,
  userConfirmReducer
})

export default rootReducer;