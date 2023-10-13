import { dayTime } from './dayTime'

export const greetingByDayTime = (() => {
  switch (dayTime) {
    case 'night':
      return 'Доброй ночи'
    case 'morning':
      return 'Доброе утро'
    case 'evening':
      return 'Добрый вечер'
    case 'afternoon':
    default:
      return 'Добрый день'
  }
})()
