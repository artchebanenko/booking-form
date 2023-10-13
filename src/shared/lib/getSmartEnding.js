export function getSmartEnding(count, forms) {
  const rest = count % 10
  const number = +String(count).substr(-2)

  if (rest === 1 && number !== 11) {
    return forms[0]
  } else if ([2, 3, 4].includes(rest) && ![12, 13, 14].includes(number)) {
    return forms[1]
  } else {
    return forms[2]
  }
}
