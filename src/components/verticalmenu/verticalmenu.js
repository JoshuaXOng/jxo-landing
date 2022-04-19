import React from "react";
import "./verticalmenu.css";

/**
 * A React component, representing a JXO vertical menu.
 */
function VerticalMenu ({ children }) {
	return (
		<div className="jxo-vertical-menu">
			{children}
		</div>
	);
}

export default VerticalMenu;
