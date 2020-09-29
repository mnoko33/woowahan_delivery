import { createAction, handleActions } from 'redux-actions';
import api from '../api';

const SET_RESTAURANT_LIST = 'restaurant/SET_RESTAURANT_LIST';

export const setRestaurantList = createAction(SET_RESTAURANT_LIST);
export const getRestaurantList = (categoryId) => dispatch => {
  return api.getRestaurantList(categoryId)
    .then(response => {
      dispatch({
        type: SET_RESTAURANT_LIST,
        payload: response
      })
    })
    .catch(error => {
      console.log(error);
    })
}

const initialState = {
  restaurantList: [],
}


const restaurantReducer = handleActions(
  {
    [SET_RESTAURANT_LIST]: (state, { payload: restaurantList }) => ({
      ...state,
      restaurantList
    })
  },
  initialState
);

export default restaurantReducer;
