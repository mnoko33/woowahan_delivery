import { createAction, handleActions } from 'redux-actions';
import api from '../api';

const SET_AD_INFOS = 'ad/SET_AD_INFOS';

export const setAds = createAction(SET_AD_INFOS);
export const getAdInfos = () => dispatch => {
  return api.getAdInfos()
    .then(response => {
      dispatch({
        type: SET_AD_INFOS,
        payload: response
      })
    })
    .catch(error => {
      console.log(error)
    })
}

const initialState = {
  adInfos: []
}

const adReducer = handleActions(
  {
    [SET_AD_INFOS]: (state, { payload: adInfos }) => ({
      ...state,
      adInfos
    })
  },
  initialState
)

export default adReducer;