import React from "react";
import "./button.css";

function Button (props: any) {
	const size: { width: string; height: string } = props.size;
	const bColor: string = props.bColor;
	const tColor: string = props.tColor;
	const onClick: () => void = props.onClick;

	const buttonStyle = {
		width: size ? size.width : undefined,
		height: size ? size.height : undefined,
		backgroudColor: bColor,
		color: tColor
	};

	return (
		<button className="button" style={buttonStyle} onClick={() => onClick()}>
			{props.children}
		</button>
	);
}

export default Button;
