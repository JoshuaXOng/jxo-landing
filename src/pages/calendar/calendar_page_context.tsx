'use strict'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const CalendarPageContext = React.createContext({
  isReminderFormVisable: false,
  toggleIsReminderFormVisable: () => {},
  currentReminderKey: uuidv4(),
  changeCurrentReminderKey: (key: string) => {}
})

function CalendarPageProvider (props: any) {
  const [isReminderFormVisable, setIsReminderFormVisable] = useState(false)
  const toggleIsReminderFormVisable = () => {
    setIsReminderFormVisable(!isReminderFormVisable)
  }

  const [currentReminderKey, setCurrentReminderKey] = useState(uuidv4())
  const changeCurrentReminderKey = (key: string) => {
    setCurrentReminderKey(key)
  }

  return (
        <CalendarPageContext.Provider value={{
          isReminderFormVisable,
          toggleIsReminderFormVisable,
          currentReminderKey,
          changeCurrentReminderKey
        }}>
            {props.children}
        </CalendarPageContext.Provider>
  )
}

export { CalendarPageContext as default, CalendarPageProvider }
