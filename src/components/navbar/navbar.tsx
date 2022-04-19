import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import "./navbar.css";
import circleGunther from "../../../assets/circle-gunther.png";
import { NavbarPopout } from "./popout/navbar-popout";

export function Navbar () {
	const [isVertNavbarOpen, setIsVertNavbarOpen] = useState(false);

	const onHBurgClick = () => {
		setIsVertNavbarOpen(!isVertNavbarOpen);
	};
	const onLogoClick = () => {
		setIsVertNavbarOpen(false);
	};
	const onPopoutEntryClick = () => {
		setIsVertNavbarOpen(false);
	};

	return (
		<nav className="navbar">
			<nav className="navbar__main-bar">
				<div className="navbar__main-bar__left-panel">
					<div className="navbar__main-bar__left-panel__drop-down-menu" onClick={() => onHBurgClick()}>
						<IonIcon name="menu-outline" style={{ color: "white" }}></IonIcon>
					</div>
					<a href="/" onClick={onLogoClick}><img src={circleGunther} /><div>JoshuaXOng</div></a>
				</div>
				<div className="navbar__main-bar__right-panel"></div>
			</nav>
			<nav className={isVertNavbarOpen ? "navbar__popout" : "navbar__popout--hidden"}>
				<NavbarPopout
					entries={[{ mainText: "Stage", toLink: "/stage" }]}
					onEntryClick={onPopoutEntryClick}
				/>
			</nav>
			<div id={isVertNavbarOpen ? "page-tint--activated" : "page-tint--deactivated"}></div>
		</nav>
	);
}
