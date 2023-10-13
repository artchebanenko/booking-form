export const dayTime = (() => {
  const hour = new Date().getHours()
  if (hour >= 0 && hour < 6) {
    return 'night'
  }
  if (hour >= 6 && hour < 12) {
    return 'morning'
  }
  if (hour >= 12 && hour < 18) {
    return 'afternoon'
  }
  return 'evening'
})()
