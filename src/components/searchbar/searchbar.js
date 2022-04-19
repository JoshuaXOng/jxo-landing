import React, { useState } from "react";
import "./searchbar.css";

/**
 * A React component, representing a JXO search bar.
 */
function SearchBar () {
	const [text, setText] = useState("");

	const onIcon2Press = () => {
		setText("");
	};

	return (
		<div className="jxo-searchbar-container">
			<div className="jxo-searchbar-icon1">
				<ion-icon name="search-outline"></ion-icon>
			</div>
			<input className="jxo-searchbar" type="text" placeholder="Search"
				spellCheck="false" value={text}
				onChange={(event) => setText(event.target.text)}>
			</input>
			<div className="jxo-searchbar-icon2" onClick={onIcon2Press}>
				<ion-icon name="close-circle-outline"></ion-icon>
			</div>
		</div>
	);
}

export default SearchBar;
