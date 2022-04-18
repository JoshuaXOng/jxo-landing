'use strict'

import { getCurrentWeeksMonday, getNextWeeksMonday, getPastWeeksMonday } from '../../services/dateutils'

class WeeksRangeManager {
    pastWeeksMondayGen;
    nextWeeksMondayGen;

    constructor () {
      this.pastWeeksMondayGen = getPastWeeksMonday()
      this.nextWeeksMondayGen = getNextWeeksMonday()
    }

    generateInitialWeeksRange (): Array<Date> {
      const result: Array<Date> = []
      for (let i = 0; i < 4; i++) {
        const mondayDate = this.pastWeeksMondayGen.next().value
        result.splice(0, 0, mondayDate)
      }
      const currentWeeksMonday = getCurrentWeeksMonday()
      result.push(currentWeeksMonday)
      for (let i = 0; i < 4; i++) {
        const mondayDate = this.nextWeeksMondayGen.next().value
        result.push(mondayDate)
      }
      return result
    }

    addPriorWeeksToRange (weeks: Array<Date>): Array<Date> {
      const result: Array<Date> = []
      for (let i = 0; i < 4; i++) {
        const mondayDate = this.pastWeeksMondayGen.next().value
        result.splice(0, 0, mondayDate)
      }
      return [...result, ...weeks]
    }

    addFutureWeeksToRange (weeks: Array<Date>): Array<Date> {
      const result: Array<Date> = []
      for (let i = 0; i < 4; i++) {
        const mondayDate = this.nextWeeksMondayGen.next().value
        result.push(mondayDate)
      }
      return [...weeks, ...result]
    }
}

export default WeeksRangeManager
