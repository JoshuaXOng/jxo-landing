'use strict'

import React, { useState, useEffect, useContext } from 'react'
import './reminder_summary.css'
import CalendarPageContext from '../../pages/calendar/calendar_page_context'

function ReminderSummary (props: any) {
  const context = useContext(CalendarPageContext)

  const reminder = props.reminder || { title: '(no title)', text: '(no text)' }
  const isFocused = props.isFocused || false
  const isDisabled = props.isDisabled || false

  const onClick = () => {
    if (!context.isReminderFormVisable) {
      context.changeCurrentReminderKey(reminder.key)
      context.toggleIsReminderFormVisable()
    }
  }

  return (
        <div className={isFocused && isDisabled ? 'reminder-summary--raised' : 'reminder-summary'}>
            <div className='reminder-summary__decor'></div>
            <div className='reminder-summary__reminder'
                onClick={(event) => {
                  event.stopPropagation()
                  onClick()
                }}
            >
                {reminder.title}
            </div>
        </div>
  )
}

export default ReminderSummary
