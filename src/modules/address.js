import { createAction, handleActions } from "redux-actions";

const SET_ADDRESS = 'address/SET_ADDRESS';

export const setAddress = createAction(SET_ADDRESS);

const initialState = {
  address: ''
};

const addressReducer = handleActions(
  {
    [SET_ADDRESS]: (state, { payload: address }) => ({
      ...state,
      address
    })
  },
  initialState
)

export default addressReducer;