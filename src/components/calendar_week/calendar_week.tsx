'use strict'

import React from 'react'
import './calendar_week.css'
import { indexToDay, indexToMonth } from '../../services/dateutils'
import CalendarDay from '../calendar_day/calendar_day'
import { v4 as uuidv4 } from 'uuid'

function CalendarWeek (props: any) {
  const mondayDate = props.mondayDate
  const weeksReminders = props.weeksReminders || [[], [], [], [], [], [], []]

  return (
        <div className='calendar-week'>
            {[...Array(7).keys()].map((_, index) => {
              const currentDate = new Date(mondayDate); currentDate.setDate((mondayDate.getDate() + index))
              const day = indexToDay(currentDate.getDay() - 1)
              const dayOfMonth = currentDate.getDate()
              const month = indexToMonth(currentDate.getMonth())

              return (<CalendarDay
                        key={uuidv4()}
                        month={month} dayOfMonth={dayOfMonth} day={day}
                        reminders={weeksReminders[index]}
                    >
                    </CalendarDay>
              )
            })}
        </div>
  )
}

export default CalendarWeek
