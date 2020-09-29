import { createAction, handleActions } from "redux-actions";
import api from '../api';

// action type
const SET = 'category/SET';

// action create func
export const set = createAction(SET);
export const getCategoryList = () => dispatch => {
  return api.getCategoryList()
    .then(response => {
      dispatch({
        type: SET,
        payload: response
      })
    })
    .catch(error => {
      console.log(error);
    })
}

// reducer
const initialState = {
  categoryList: [],
}

const categoryReducer = handleActions(
  {
    [SET]: (state, { payload: categoryList }) => ({
      ...state,
      categoryList,
    }),
  },
  initialState
)

export default categoryReducer;
