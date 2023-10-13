import axios from 'axios'
import { takeLatest, put, call } from 'redux-saga/effects'
import { actions } from './actions'

function* worker(action) {
  const { data } = action.payload
  console.log(data)

  yield put(actions.start())
  try {
    const response = yield call(
      axios.post,
      'https://strapi.pik.ru/front-tests',
      data,
    )
    yield put(actions.update(response.data))
    yield put(actions.success())

    console.log(response)
  } catch (err) {
    yield put(actions.fail(err.response.data))
  }
}

export function* bookingPostWatcher() {
  yield takeLatest(actions.trigger.toString(), worker)
}
