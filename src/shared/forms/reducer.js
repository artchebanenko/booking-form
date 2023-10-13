import { createAction, handleAction } from 'redux-actions'

export const updateFormState = createAction(
  'UPDATE_FORM_STATE',
  (form, state) => ({ form, state }),
)

export const formReducer = handleAction(
  updateFormState,
  (state, action = {}) => ({
    ...state,
    [action.payload.form]: action.payload.state,
  }),
  {},
)
