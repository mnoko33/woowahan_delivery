import { createAction, handleActions } from 'redux-actions';
import api from '../api';

const SET_RESTAURANT_LIST = 'restaurant/SET_RESTAURANT_LIST';
const UPDATE_RESTAURANT_LIST = 'restaurant/UPDATE_RESTAURANT_LIST';
const SET_RESTAURANT_INFO = 'restaurant/SET_RESTAURANT_INFO';
const SET_MENU_LIST = 'restaurant/SET_MENU_LIST';
const INIT_NEXTPAGE = 'restaurant/INIT_NEXTPAGE';
const INCREASE_NEXTPAGE = 'restaurant/INCREASE_NEXTPAGE';

export const setRestaurantList = createAction(SET_RESTAURANT_LIST);
export const setRestaurantInfo = createAction(SET_RESTAURANT_INFO);
export const initNextPage= createAction(INIT_NEXTPAGE);

export const getRestaurantList = (categoryId, nxetPage) => dispatch => {
  return api.getRestaurantList(categoryId, nxetPage)
    .then(response => {
      if (nxetPage === 1) {
        dispatch({
          type: SET_RESTAURANT_LIST,
          payload: response
        })
      } else {
        dispatch({
          type: UPDATE_RESTAURANT_LIST,
          payload: response
        })
      }
      dispatch({
        type: INCREASE_NEXTPAGE
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

export const getMenuList = (restaurantId) => dispatch => {
  return api.getMenuList(restaurantId)
    .then(response => {
      dispatch({
        type: SET_MENU_LIST,
        payload: response
      })
    })
    .catch(error => {
      console.log(error);
    })
}

const initialState = {
  categoryId: null,
  nextPage: 1,
  restaurantInfo: null,
  menuList: [],
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
    }),
    [SET_MENU_LIST]: (state, { payload: menuList }) => ({
      ...state,
      menuList,
    }),
    [UPDATE_RESTAURANT_LIST]: (state, { payload: restaurantList }) => ({
      ...state,
      restaurantList: [...state.restaurantList, ...restaurantList]
    }),
    [INIT_NEXTPAGE]: (state) => ({
      ...state,
      nextPage: 1,
    }),
    [INCREASE_NEXTPAGE]: (state) => ({
      ...state,
      nextPage: state.nextPage + 1
    })
  },
  initialState
);

export default restaurantReducer;
