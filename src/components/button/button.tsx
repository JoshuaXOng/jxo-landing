import React from "react";
import "./button.css";

type ButtonProps = {
	children: string;
	size: { width: string; height: string };
	backgroundColor?: string;
	textColor?: string;
	onClick?: () => void;
}

export function Button (props: ButtonProps) {
	const { size, backgroundColor, textColor, onClick } = props;

	const buttonStyle = {
		width: size ? size.width : undefined,
		height: size ? size.height : undefined,
		backgroudColor: backgroundColor,
		color: textColor
	};

	return (
		<button className="button" style={buttonStyle} onClick={() => onClick && onClick()}>
			{props.children}
		</button>
	);
}
