import { createAction, handleActions } from "redux-actions";
import api from '../api';

// action type
const SET_CATEGORY_LIST = 'category/SET_CATEGORY_LIST';
const SET_CATEGORY_ID = 'category/SET_CATEGORY_ID';


// action create func
export const setCategoryId = createAction(SET_CATEGORY_ID);

export const getCategoryList = () => dispatch => {
  return api.getCategoryList()
    .then(response => {
      dispatch({
        type: SET_CATEGORY_LIST,
        payload: response
      })
    })
    .catch(error => {
      console.log(error);
    })
}

// reducer
const initialState = {
  categoryId: null,
  categoryList: [],
}

const categoryReducer = handleActions(
  {
    [SET_CATEGORY_LIST]: (state, { payload: categoryList }) => ({
      ...state,
      categoryList,
    }),
    [SET_CATEGORY_ID]: (state, { payload: categoryId }) => ({
      ...state,
      categoryId,
    })
  },
  initialState
)

export default categoryReducer;
