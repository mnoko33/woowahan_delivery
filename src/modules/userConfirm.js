import { handleActions, createAction } from 'redux-actions';

const SHOW_USERCONFIRM = 'userConfirm/SHOW_USERCONFIRM';
const HIDE_USERCONFIRM = 'userConfirm/HIDE_USERCONFIRM';

export const showUserConfirm = createAction(SHOW_USERCONFIRM);
export const hideUserConfirm = createAction(HIDE_USERCONFIRM);

const initialState = {
  isVisible: false,
  mainMessage: '',
  description: '',
  handleClickCancelBtn: null,
  handleClickConfirmBtn: null,
}

const userConfirmReducer = handleActions(
  {
    [SHOW_USERCONFIRM]: (state, { payload: { mainMessage, description, handleClickCancelBtn, handleClickConfirmBtn } }) => ({
      ...state,
      mainMessage,
      description,
      handleClickCancelBtn,
      handleClickConfirmBtn,
      isVisible: true,
    }),
    [HIDE_USERCONFIRM]: state => initialState,
  },
  initialState,
)

export default userConfirmReducer;