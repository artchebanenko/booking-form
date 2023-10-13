import { createActions } from 'redux-actions'

const options = {
  prefix: 'api/offerSpecialGet',
  namespace: '->',
}

const { start, success, fail, update, trigger } = createActions(
  {
    START: undefined,
    SUCCESS: undefined,
    FAIL: (error) => ({ error }),
    UPDATE: (data) => ({ data }),
    TRIGGER: undefined,
  },
  options,
)

const actions = { start, success, fail, update, trigger }

export { actions, options }
