'use strict'

import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import './calendar_day.css'
import CalendarPageContext from '../../pages/calendar/calendar_page_context'
import ReminderSummary from '../reminder_summary/reminder_summary'

function CalendarDay (props: any, ref: any) {
  const context = useContext(CalendarPageContext)

  const month: string = props.month
  const dayOfMonth: string = props.dayOfMonth
  const day: string = props.day
  const reminders_ = props.reminders || []

  const [reminders, setReminders] = useState(reminders_)

  const onClick = () => {
    context.toggleIsReminderFormVisable()
    if (!context.isReminderFormVisable) setReminders([...reminders, { title: '(no title)' }])
  }

  // useImperativeHandle(ref, () => ({
  //     flatten: () => {

  //     }
  // }));

  return (
        <div className='calendar-day-box' onClick={() => onClick()}>
            <div className='calendar-day-box__header'>
                <div className='calendar-day-box__header__day'>{day}</div>
                <div className='calendar-day-box__header__month-and-day-of'>
                    {month ? `${month} ` : ''}
                    {dayOfMonth}
                </div>
            </div>
            <div className='calendar-day-box__body'>
                {reminders.map((reminder: Reminder, index: number, reminders: Array<Reminder>) => (
                    <ReminderSummary reminder={reminder} />
                ))}
            </div>
        </div>
  )
}

export default CalendarDay
