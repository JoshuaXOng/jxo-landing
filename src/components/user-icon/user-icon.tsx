import React from "react";
import "./user-icon.css";

export default function UserIcon ({ imgSource = "https://avatars.githubusercontent.com/u/63457760?s=60&v=4", identifierColor = null }) {
	return (
		<div style={{ position: "relative" }}>
			<img src={imgSource} style={{
				zIndex: -1000,
				position: "relative",
				top: "0px",
				left: "0px",
				width: "2rem",
				height: "2rem",
				borderRadius: "50%"
			}}>
			</img>
			<div style={{
				zIndex: 1000,
				position: "absolute",
				left: "0px",
				bottom: "0px",
				backgroundColor: "orange",
				width: "1rem",
				height: "1rem",
				border: "2px solid white",
				borderRadius: "50%"
			}}>
			</div>
		</div>
	);
}
