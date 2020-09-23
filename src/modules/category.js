import { createAction, handleActions } from "redux-actions";

// action type
const SET = 'category/SET';

// action create func
export const set = createAction(SET);

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
