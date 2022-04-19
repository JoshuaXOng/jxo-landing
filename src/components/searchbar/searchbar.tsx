import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import "./searchbar.css";

export default function SearchBar () {
	const [text, setText] = useState("");

	const onIcon2Press = () => {
		setText("");
	};

	return (
		<div className="searchbar-container">
			<div className="searchbar-icon1">
				<IonIcon name="search-outline"></IonIcon>
			</div>
			<input className="searchbar" type="text" placeholder="Search"
				spellCheck="false" value={text}
				onChange={(event) => setText(event.target.value)}>
			</input>
			<div className="searchbar-icon2" onClick={onIcon2Press}>
				<IonIcon name="close-circle-outline"></IonIcon>
			</div>
		</div>
	);
}

