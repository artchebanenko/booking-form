export const parseCount = (value) => {
  const digits = value ? value.replace(/[^\d]|^0/g, '') : ''
  return digits
}

export const parsePhone = (value) => {
  if (!value) {
    return ''
  }

  const digits = value.replace(/[^\d]/g, '')
  if (!digits) {
    return ''
  }

  if (digits.length === 1) {
    if (digits === '8') {
      return `+7`
    }
    if (digits !== '7') {
      return `+7 ${digits}`
    }
    return `+${digits}`
  }
  if (digits.length <= 4) {
    return `+${digits[0]} ${digits.slice(1, 4)}`
  }
  if (digits.length <= 7) {
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}`
  }
  if (digits.length <= 9) {
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(
      4,
      7,
    )}-${digits.slice(7, 9)}`
  }
  return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(
    4,
    7,
  )}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`
}
