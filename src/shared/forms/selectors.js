export const getFormState = (state, form) =>
  (state && state.finalForm && state.finalForm[form]) || {}
