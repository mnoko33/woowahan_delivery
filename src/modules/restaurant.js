import { createAction, handleActions } from 'redux-actions';
import api from '../api';

const SET_RESTAURANT_LIST = 'restaurant/SET_RESTAURANT_LIST';
const SET_RESTAURANT_INFO = 'restaurant/SET_RESTAURANT_INFO'

export const setRestaurantList = createAction(SET_RESTAURANT_LIST);
export const setRestaurantInfo = createAction(SET_RESTAURANT_INFO);

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
export const getRestaurantInfo = (restaurantId) => dispatch => {
  return api.getRestaurantInfo(restaurantId)
    .then(response => {
      dispatch({
        type: SET_RESTAURANT_INFO,
        payload: response
      })
    })
    .catch(error => {
      console.log(error);
    })
}

export const updateRestaurantInfo = ({ id, data }) => dispatch => {
  return api.updateRestaurantInfo({ id, data })
    .then(response => {
      dispatch({
        type: SET_RESTAURANT_INFO,
        payload: response,
      })
    })
    .catch(error => {
      console.log(error);
    })
}

const initialState = {
  restaurantInfo: null,
  restaurantList: [],
}

const restaurantReducer = handleActions(
  {
    [SET_RESTAURANT_LIST]: (state, { payload: restaurantList }) => ({
      ...state,
      restaurantList,
    }),
    [SET_RESTAURANT_INFO]: (state, { payload: restaurantInfo }) => ({
      ...state,
      restaurantInfo,
    })
  },
  initialState
);

export default restaurantReducer;
