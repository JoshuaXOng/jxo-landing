'use strict'

import React, { useContext, useEffect, useState, useRef } from 'react'
import './calendar_page.css'
import InfScrollDecorator from '../../components/inf_scroll_decorator/inf_scroll_decorator'
import ReminderForm from '../../components/reminder_form/reminder_form'
import Draggable from 'react-draggable'
import CalendarPageContext from './calendar_page_context'
import WeeksRangeManager from './calendar_page_utils'
import CalendarWeek from '../../components/calendar_week/calendar_week'
import { v4 as uuidv4 } from 'uuid'

// Try using useRef on dis.
const weeksRangeManager = new WeeksRangeManager()

function CalendarPage () {
  const context = useContext(CalendarPageContext)

  const [weeksRange, setWeeksRange] = useState(weeksRangeManager.generateInitialWeeksRange())

  const [reminders, setReminders] = useState([
    { key: uuidv4(), date: new Date(2021, 8, 28), title: 'A reminder of the key format.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(2021, 8, 28), title: 'Eat a cake.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(2021, 8, 28), title: 'Do eat a cake.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(2021, 8, 28), title: 'A reminder of the key format.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(2021, 8, 28), title: 'A reminder of the key format.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(2021, 8, 28), title: 'Eat a cake.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(), title: 'Do eat a cake.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(), title: 'A reminder of the key format.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(), title: 'Eat a cake.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(), title: 'Do eat a cake.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(), title: 'A reminder of the key format.', text: '83fjv03r' },
    { key: uuidv4(), date: new Date(), title: 'A reminder of the key format.', text: '83fjv03r' }
  ])

  function updateReminder (reminder: Reminder) {
    const key = context.currentReminderKey
    console.log(key)
    const index = reminders.findIndex((entry) => entry.key === key)
    console.log(index)
    console.log(reminders)
    const reminders_ = [...reminders]
    console.log(reminders_)
    reminders_[index] = { ...reminders_[index], title: reminder.title }
    console.log(reminders_)
    useState(reminders_[index])
  }

  function getReminderByKey (key: string) {
    return reminders.find((entry) => entry.key === key)
  }

  function getDayReminders (date: Date) {
    return reminders.filter(reminder => (
      reminder.date.getDate() === date.getDate() &&
                reminder.date.getMonth() === date.getMonth() &&
                reminder.date.getFullYear() === date.getFullYear()
    ))
  }

  function getWeekReminders (mondayDate: Date) {
    const currentDate = new Date(mondayDate)
    const result: any = [];
    [...Array(7).keys()].forEach((_) => {
      const x = getDayReminders(currentDate)
      result.push(x)
      currentDate.setDate(currentDate.getDate() + 1)
    })
    return result
  }

  return (
        <div className='calendar-page'>
            <Draggable defaultPosition={{ x: 200, y: 200 }}>
                <div className={context.isReminderFormVisable ? 'calendar-page__reminder-form' : 'calendar-page__reminder-form--hidden'}>
                    <ReminderForm
                        reminder={getReminderByKey(context.currentReminderKey)}
                    />
                </div>
            </Draggable>
            <InfScrollDecorator
                onAtTopBounds={() => setWeeksRange(weeksRangeManager.addPriorWeeksToRange(weeksRange))}
                onAtBotBounds={() => setWeeksRange(weeksRangeManager.addFutureWeeksToRange(weeksRange))}
            >
                {weeksRange.map((weeksMondayDate, index) => (
                    <CalendarWeek
                        mondayDate={weeksMondayDate}
                        weeksReminders={getWeekReminders(weeksMondayDate)}
                    />
                ))}
            </InfScrollDecorator>
        </div>
  )
}

export { CalendarPage as default }
