"use strict";

import React from "react";
import "./form.css";
import ReminderForm from "../reminder_form/reminder_form";

/**
 * A React component, a basic form.
 *
 * @returns This React component.
 */
function Form () {
	let data = {};
	const textBoxtDelegate = (tBData) => {
		data = {
			...data,
			tBData: tBData
		};
	};

	const defaultFunc = (event) => {
		const url = "https://jxo-components.herokuapp.com/test";// "http://localhost:3000/test";
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		event.preventDefault();
	};

	return (
		<form className="jxo-form" onSubmit={(event) => defaultFunc(event)}>
			<ReminderForm onChange={(value) => textBoxtDelegate(value)}>
			</ReminderForm>
			<button>Submit</button>
		</form>
	);
}

export default Form;
