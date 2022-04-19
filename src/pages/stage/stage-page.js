import React from "react";
import "./stage-page.css";

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
					month={"Sep"}
					day={"Mon"}
					dayOfMonth={4}
				/>
			</div>
			{/* <ReminderSummary></ReminderSummary> */}
		</div>
	);
}

export default StagePage;
