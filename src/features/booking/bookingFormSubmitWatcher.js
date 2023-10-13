import { takeEvery, put } from 'redux-saga/effects'
import { submitTrigger } from './actions'
import { apiActions } from '@shared/api'

function* worker(action) {
  const { firstName, lastName, phone, mail, flatsCount } = action.payload.values
  // yield select() to get values from state

  const data = {
    user: { firstName, lastName, phone, mail },
    order: { flatsCount: +flatsCount, time: Date.now() },
  }

  yield put(apiActions.bookingPost.trigger(data))
}

export function* bookingFormSubmitWatcher() {
  yield takeEvery(submitTrigger.toString(), worker)
}
