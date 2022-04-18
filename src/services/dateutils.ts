'use strict'

function getCurrentWeeksMonday (): Date {
  const currentDate = new Date()
  return new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1))
}

function * getPastWeeksMonday (): Generator<Date, undefined, boolean> {
  const originalMonday = getCurrentWeeksMonday()
  while (true) {
    yield new Date(originalMonday.setDate(originalMonday.getDate() - 7))
  }
}

function * getNextWeeksMonday (): Generator<Date, undefined, boolean> {
  const originalMonday = getCurrentWeeksMonday()
  while (true) {
    yield new Date(originalMonday.setDate(originalMonday.getDate() + 7))
  }
}

const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

function indexToDay (index: number): string {
  if (index === -1) return days[days.length - 1]
  else return days[index]
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function indexToMonth (index: number): string {
  return months[index]
}

export {
  getCurrentWeeksMonday, getPastWeeksMonday, getNextWeeksMonday,
  indexToDay, indexToMonth
}
