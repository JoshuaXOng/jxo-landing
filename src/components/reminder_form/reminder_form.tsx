'use strict'

import Button from '../button/button'
import React, { useState, useEffect, useContext } from 'react'
import './reminder_form.css'
import CalendarPageContext from '../../pages/calendar/calendar_page_context'

function ReminderForm (props: any) {
  const context = useContext(CalendarPageContext)

  const reminder = props.reminder || { title: 'Blinker.', text: 'Blooper.' }
  const onTitleChange = props.onTitleChange || ((title: string) => {})
  const onTextChange = props.onTextChange || ((text: string) => {})
  const onSubmit = props.onSubmit || (() => {})

  const [title, setTitle] = useState(reminder.title)
  const [text, setText] = useState(reminder.text)

  useEffect(() => {
    setTitle(reminder.title)
    setText(reminder.text)
  }, [reminder])

  return (
        <div className='reminder-form'>
            <input className='reminder-form__title' type='text' placeholder='Title...' value={title}
                onChange={(event) => {
                  setTitle(event.target.value)
                  // onTitleChange();
                  context.changeCurrentReminderKey('')
                }}
            ></input>
            <textarea className='reminder-form__text-area' placeholder='Additional info...' value={text}
                onChange={(event) => {
                  setText(event.target.value)
                  // onTextChange();
                }}
            >
            </textarea>
            <Button onClick={() => onSubmit()}>Save</Button>
        </div>
  )
}

export default ReminderForm
