import React, { useRef } from "react";
import "./inf-scroll.css";

export default function InfScrollDecorator (props: any) {
	const onAtTopBounds = props.onAtTopBounds;
	const onAtBotBounds = props.onAtBotBounds;

	const scrollContainer = useRef(null);

	let isBeingProcessed = false;
	function processing (func: CallableFunction) {
		isBeingProcessed = true;
		func && func();
		isBeingProcessed = false;
	}

	const handleScrollAndWheel = () => {
		if (isBeingProcessed) return;
		const scrollTop = scrollContainer.current.scrollTop;
		const scrollBot = scrollContainer.current.scrollTop + scrollContainer.current.getBoundingClientRect().height;
		if (scrollTop === 0) {
			processing(onAtTopBounds);
		} else if (scrollBot === scrollContainer.current.scrollHeight) {
			processing(onAtBotBounds);
		}
	};

	return (
		<div className='inf-scroll' ref={scrollContainer}
			onScrollCapture={() => handleScrollAndWheel()}
			onWheelCapture={() => handleScrollAndWheel()}
		>
			{props.children}
		</div>
	);
}
