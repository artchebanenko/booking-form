import { createActions } from 'redux-actions'

const options = {
  prefix: 'api/bookingPost',
  namespace: '->',
}

const { start, success, fail, update, trigger } = createActions(
  {
    START: undefined,
    SUCCESS: undefined,
    FAIL: (error) => ({ error }),
    UPDATE: (data) => ({ data }),
    TRIGGER: (data) => ({ data }),
  },
  options,
)

const actions = { start, success, fail, update, trigger }

export { actions, options }
