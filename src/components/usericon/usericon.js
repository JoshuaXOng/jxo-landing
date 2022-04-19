import React from "react";
import "./usericon.css";

/**
 * A React component, representing a JXO user icon.
 *
 * @param imgSource         The source of the image; compatible with the value corresponding to the HTML src attribute value.
 * @param identifierColor   The color of the identifier; a valid CSS value.
 */
function UserIcon ({ imgSource = "https://avatars.githubusercontent.com/u/63457760?s=60&v=4", identifierColor = null }) {
	const containerStyle = {
		position: "relative"
	};

	const userIconStyle = {
		zIndex: -1000,
		position: "relative",
		top: "0px",
		left: "0px",
		width: "2rem",
		height: "2rem",
		borderRadius: "50%"
	};

	const userIconIdentifierStyle = {
		zIndex: 1000,
		position: "absolute",
		left: "0px",
		bottom: "0px",
		backgroundColor: "orange",
		width: "1rem",
		height: "1rem",
		border: "2px solid white",
		borderRadius: "50%"
	};
	userIconIdentifierStyle.backgroundColor = identifierColor || "grey";

	return (
		<div style={containerStyle}>
			<img src={imgSource} style={userIconStyle}>
			</img>
			<div style={userIconIdentifierStyle}>
			</div>
		</div>
	);
}

export default UserIcon;
