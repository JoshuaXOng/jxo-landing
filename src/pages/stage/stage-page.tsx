import React from "react";
import "./stage-page.css";
import Sidebar from "../../components/sidebar/sidebar";
import Preview from "../../components/preview/preview";

export default function StagePage () {
	return (
		<div className='stage-page'>
			<Sidebar></Sidebar>
			<Preview></Preview>
		</div>
	);
}

