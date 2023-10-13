import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

export const configureStore = () => {
  const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeEnchancers(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}
