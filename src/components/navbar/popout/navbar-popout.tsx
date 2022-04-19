import React from "react";
import orgalorg from "../../../../assets/orgalorg.png";
import "./navbar-popout.css";

type NavbarPopoutProps = {
	entries: {
		mainText: string;
		toLink: string;
	}[];
	onEntryClick: () => void;
};

export const NavbarPopout = (props: NavbarPopoutProps) => {
	const { entries, onEntryClick } = props;

	return (
		<nav className="navbar-popout"> 
			{entries.map(e =>
				<div className="navbar-popout__entries" onClick={() => onEntryClick()}>
					<a href={e.toLink}>{e.mainText}</a>
				</div>
			)}
			<div className="navbar-popout__footer">
				<div>There ain't nothing here.</div>
				<div className="orgalorg-spinner">
					<img className="orgalorg-spinner__img-1" style={{ maxWidth: "100%", maxHeight: "100%" }} src={orgalorg}></img>
					<img className="orgalorg-spinner__img-2" style={{ maxWidth: "100%", maxHeight: "100%" }} src={orgalorg}></img>
				</div>
			</div>
		</nav>
	);
}

