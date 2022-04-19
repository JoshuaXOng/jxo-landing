import React, { useState, useEffect, ReactElement } from "react";
import { v4 as uuidv4 } from "uuid";
import "./dropdown-menu.css";

type DropDownMenuProps = {
	children: ReactElement,
	source: ReactElement,
	translation?: { x: string, y: string }
}

export default function DropDownMenu (props: DropDownMenuProps) {
	const { children, source, translation } = props;
	
	const id = uuidv4();

	const [isOpen, setIsOpen] = useState(false);
	const [popupStyle, setPopupStyle]: [any, any] = useState(translation ? {
			top: translation.y,
			left: translation.x
		} : {}
	);

	useEffect(() => {
		const popup = document.getElementById(id);
		const popupRect = popup.getBoundingClientRect();
		const offset = 20;
		if (popupRect.right > window.outerWidth) {
			const shift = window.outerWidth - popupRect.right - offset;
			setPopupStyle({ ...popupStyle, transform: `translateX(${shift}px)` });
		} else if (popupRect.left < 0) {
			const shift = window.outerWidth - popupRect.left + offset;
			setPopupStyle({ ...popupStyle, transform: `translateX(${shift}px)` });
		}
	}, [isOpen]);

	return (
		<div className="drop-down-menu-container">
			<div onClick={() => setIsOpen(!isOpen)}>
				{source}
			</div>
			<div id={id} className="drop-down-menu-container__menu" style={popupStyle}>
				{isOpen && children}
			</div>
		</div>
	);
}
