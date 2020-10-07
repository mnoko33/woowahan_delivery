import { createAction, handleActions } from 'redux-actions';
import { addExistingItem } from '../utils/addExistingItem';

const ADD_ITEM = 'cart/ADD_ITEM';
const SET_CART_RESTAURANT_INFO = 'cart/SET_RESTAURANT_INFO';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const UPDATE_ITEM = 'cart/UPDATE_ITEM';
const RESET_CART = 'cart/RESET_CART';

export const addItem = createAction(ADD_ITEM);
export const setCartRestaurantInfo = createAction(SET_CART_RESTAURANT_INFO);
export const removeItem = createAction(REMOVE_ITEM);
export const updateItem = createAction(UPDATE_ITEM);
export const resetCart = createAction(RESET_CART);

const initialState = {
  restaurantInfo: null,
  items: [],
}

const cartReducer = handleActions(
  {
    [ADD_ITEM]: (state, { payload: newItem }) => ({
      ...state,
      items: addExistingItem(state.items, newItem)
    }),
    [SET_CART_RESTAURANT_INFO]: (state, { payload: restaurantInfo }) => ({
      ...state,
      restaurantInfo
    }),
    [REMOVE_ITEM]: (state, { payload: itemId }) => ({
      ...state,
      items: state.items.filter(item => item.id !== itemId)
    }),
    [UPDATE_ITEM]: (state, { payload: { itemId, itemCnt } }) => ({
      ...state,
      items: state.items.map(item => {
        return item.id === itemId ? { ...item, cnt: itemCnt } : item;
      })
    }),
    [RESET_CART]: () => initialState,
  },
  initialState
)

export default cartReducer;