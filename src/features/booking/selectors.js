import { names } from '@shared/forms'

export const getFlatsCount = (state) =>
  state.finalForm &&
  state.finalForm[names.booking] &&
  state.finalForm[names.booking].values.flatsCount
