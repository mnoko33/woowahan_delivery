import { createAction, handleActions } from 'redux-actions';

const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const RESET_CART = 'cart/RESET_CART';

export const addItem = createAction(ADD_ITEM);
export const removeItem = createAction(REMOVE_ITEM);
export const resetCart = createAction(RESET_CART);

const initialState = {
  restaurantId: null,
  items: [],
}

const cartReducer = handleActions(
  {
    [ADD_ITEM]: (state, { payload: itemId }) => ({
      ...state,
      items: [ ...state.items, itemId ]
    }),
    [REMOVE_ITEM]: (state, { payload: itemId }) => ({
      ...state,
      items: state.items.filter(id => id !== itemId)
    }),
    [RESET_CART]: () => initialState,
  },
  initialState
)

export default cartReducer;