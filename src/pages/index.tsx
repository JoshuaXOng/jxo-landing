import LogRocket from 'logrocket';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./home/home-page";
import StagePage from "./stage/stage-page";
import { Navbar } from "../components/navbar/navbar";

LogRocket.init('bfncku/jxo-landing');
fetch("https://www.cloudflare.com/cdn-cgi/trace")
	.then(response => response.json())
	.then(data => LogRocket.identify(data.ip))
	.catch(error => console.log(error));

type RouterProps = {
	children: JSX.Element;
}

const Router = (props: RouterProps) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/stage' component={StagePage} />
			</Switch>
		</BrowserRouter>
	);
};

function App () {
	return (
		<Router>
			<Navbar></Navbar>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
