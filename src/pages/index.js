import React, { useState } from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./home/home-page";
import StagePage from "./stage/stage-page";
import UsersPage from "./users/users-page";
import Navbar from "../components/navbar/navbar";
import theGuntherImg from "../../assets/thegunthercropped.png";
import VertNavbar from "../components/vertnavbar/vertnavbar";
import LoginPage from "./login/login-page";

function App () {
	const [isVertNavbarOpen, setIsVertNavbarOpen] = useState(false);

	return (
		<HashRouter>
			<div className='app__nb-group'>
				<nav className='app__nb-group__navbar'>
					<Navbar>
						<div className='app__nb-group__navbar__panel-container'>
							<div className='app__nb-group__navbar__panel-container__left-panel'>
								<div data-cy='vert-navbar-toggle' className='app__nb-group__navbar__panel-container__left-panel__drop-down-menu' onClick={() => setIsVertNavbarOpen(!isVertNavbarOpen)}>
									<ion-icon name='menu-outline' style={{ color: "white" }}></ion-icon>
								</div>
								<a href='/#/'>
									<img src={theGuntherImg}>
									</img>
									<div>Gunther</div>
								</a>
							</div>
							<div className='app__nb-group__navbar__panel-container__right-panel'>
							</div>
						</div>
					</Navbar>
				</nav>
				<nav data-cy={isVertNavbarOpen ? "vert-navbar--opened" : "vert-navbar--closed"} className={isVertNavbarOpen ? "app__nb-group__vert-navbar" : "app__nb-group__vert-navbar--hidden"}>
					<VertNavbar
						titles={["Stage", "Users", "Calendar", "Login"]}
						links={["/#/stage", "/#/users", "/#/calendar", "/#/login"]}
					/>
				</nav>
				<div data-cy={isVertNavbarOpen ? "page-tint--activated" : "page-tint--deactivated"} id={isVertNavbarOpen ? "page-tint--activated" : "page-tint--deactivated"}></div>
			</div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/stage' component={StagePage} />
				<Route path='/users' component={UsersPage} />
				<Route path='/calendar'>
					<CalendarPageProvider>
						<CalendarPage />
					</CalendarPageProvider>
				</Route>
				<Route path='/login' component={LoginPage} />
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
