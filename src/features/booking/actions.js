import { createAction } from 'redux-actions'

export const submitTrigger = createAction(
  'booking/bookingFormSubmit->TRIGGER',
  (values) => ({ values }),
)
