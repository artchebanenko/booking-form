import { all, fork } from 'redux-saga/effects'

import { apiWatchers } from '@shared/api/watchers'
import { featuresWatchers } from '@features/watchers'

const watchers = [...apiWatchers, ...featuresWatchers]

export function* rootSaga() {
  yield all(watchers.map(fork))
}
