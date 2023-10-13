import { handleActions } from 'redux-actions'
import { actions, options } from './actions'

const initialState = {
  status: null,
  data: null,
  error: null,
}

export const reducer = handleActions(
  {
    [actions.start]: (state) => ({ ...state, status: 'loading', error: null }),
    [actions.success]: (state) => ({ ...state, status: 'success' }),
    [actions.fail]: (state, action) => ({
      ...state,
      status: 'failure',
      error: action.payload.error,
    }),
    [actions.update]: (state, action) => ({
      ...state,
      data: action.payload.data,
    }),
  },
  initialState,
  options,
)
