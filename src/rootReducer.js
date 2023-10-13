import { combineReducers } from 'redux'

import { formReducer } from '@shared/forms'
import { apiReducer } from '@shared/api'

export const rootReducer = combineReducers({
  finalForm: formReducer,
  api: apiReducer,
})
