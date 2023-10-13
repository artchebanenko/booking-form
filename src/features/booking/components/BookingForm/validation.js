const errorMessages = {
  required: 'Заполните поле',
  format: 'Неверный формат',
  moreThanOne: 'Укажите одно или больше',
}

export function submitValidate(values) {
  const errors = {}
  if (!/\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(values.phone)) {
    errors.phone = errorMessages.format
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,15}$/i.test(values.mail)) {
    errors.mail = errorMessages.format
  }
  if (!/^[0-9]+$/.test(values.flatsCount) || +values.flatsCount < 1) {
    errors.flatsCount = errorMessages.moreThanOne
  }
  if (Object.keys(errors).length !== 0) {
    return errors
  }
  return
}

export function validate(values) {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = errorMessages.required
  }
  if (!values.lastName) {
    errors.lastName = errorMessages.required
  }
  if (!values.phone) {
    errors.phone = errorMessages.required
  }
  if (!values.mail) {
    errors.mail = errorMessages.required
  }
  if (!values.flatsCount) {
    errors.flatsCount = errorMessages.required
  }
  return errors
}
