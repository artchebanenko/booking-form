import { combineReducers } from 'redux'

import { reducer as bookingPostReducer } from './bookingPost/reducer'
import { actions as bookingPostActions } from './bookingPost/actions'
import { selectors as bookingPostSelectors } from './bookingPost/selectors'

import { reducer as offerSpecialGetReducer } from './offerSpecialGet/reducer'
import { actions as offerSpecialGetActions } from './offerSpecialGet/actions'
import { selectors as offerSpecialGetSelectors } from './offerSpecialGet/selectors'

export const apiReducer = combineReducers({
  bookingPost: bookingPostReducer,
  offerSpecialGet: offerSpecialGetReducer,
})

export const apiActions = {
  bookingPost: bookingPostActions,
  offerSpecialGet: offerSpecialGetActions,
}

export const apiSelectors = {
  bookingPost: bookingPostSelectors,
  offerSpecialGet: offerSpecialGetSelectors,
}
