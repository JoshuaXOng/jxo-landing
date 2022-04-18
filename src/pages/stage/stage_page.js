'use strict'

import React from 'react'
import './stage_page.css'
import SubmissionCard from '../../components/submission_card/submission_card'
import Button from '../../components/button/button'
import CalendarDay from '../../components/calendar_day/calendar_day'
import InfScrollDecorator from '../../components/inf_scroll_decorator/inf_scroll_decorator'
import CalendarWeek from '../../components/calendar_week/calendar_week'
import { getCurrentWeeksMonday } from '../../services/dateutils'
import Reminderform from '../../components/reminder_form/reminder_form'
import ReminderSummary from '../../components/reminder_summary/reminder_summary'

function StagePage () {
  return (
        <div className='stage-page'>
            {/* <SubmissionCard
                image={<img src='https://picsum.photos/300/150' />}
                title={'Some Summary'}
                text={'Carrot cannot run, potatoes can though. Salmon is good. Jelly not so much.'}
                buttons={<Button>'Proceed'</Button>}
            /> */}
            {/* <Reminderform textSource='sdsd'>
            </Reminderform> */}
            <div id='temp'>
                <CalendarDay
                    month={'Sep'}
                    day={'Mon'}
                    dayOfMonth={4}
                />
            </div>
            {/* <ReminderSummary></ReminderSummary> */}
        </div>
  )
}

export default StagePage
