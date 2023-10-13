import axios from 'axios'
import { takeLatest, put, call } from 'redux-saga/effects'
import { actions } from './actions'

function* worker() {
  yield put(actions.start())
  try {
    const response = yield call(
      axios.get,
      'https://api.pik.ru/v2/offer/special?types=1,2&locations=2,3',
    )
    yield put(actions.update(response.data))
    yield put(actions.success())
  } catch (err) {
    yield put(actions.fail(err.response.data))
  }
}

export function* offerSpecialGetWatcher() {
  yield takeLatest(actions.trigger.toString(), worker)
}
