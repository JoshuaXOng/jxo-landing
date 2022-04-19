import React from "react";
import circleGunther from "../../../assets/circle-gunther.png";
import adventureTimeCalendar from "../../../assets/adventure-time-calendar.jpg";
import guntherPixi from "../../../assets/gunther-pixi.png";
import betfairRace from "../../../assets/betfair-race.png";
import blueBall from "../../../assets/blue-ball.png";
import bmo from "../../../assets/bmo.png";
import "./home-page.css";
import { calanderProjectDescription, guntherProjectDescription, racingOddsProjectDescription, psBallProjectDescription, nextProjectDescription } from "./home-page-text";
import { Button } from "../../components/button/button";
import { ItemSummary } from "../../components/item-summary/item-summary";

export default function HomePage () {
	return (
		<div data-cy='home-page' className='home-page'>
			<header data-cy='home-page__header' className='home-page__header'>
				<div className='home-page__header__image'>
					<img src={circleGunther}>
					</img>
				</div>
				<div className='home-page__header__title'>Stealing Jewels <br /> EVERY DAY!</div>
				<div className='home-page__header__additional'>
					<Button size={{ width: "10rem", height: "3rem" }}>RANDOM BUTTON!!!</Button>
				</div>
				<div className="custom-shape-divider-bottom-1632882764">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 70 L0 16.48 0 0 1200 0 1200 70 Z" className="shape-fill"></path>
					</svg>
				</div>
			</header>
			<section className='home-page__section-1'>
				<ItemSummary
					isImageOnRight={false}
					title='Calendar'
					text={calanderProjectDescription}
					image={adventureTimeCalendar}
				/>
			</section>
			<hr />
			<section className='home-page__section-2'>
				<ItemSummary
					isImageOnRight={true}
					title='Gunther'
					text={guntherProjectDescription}
					image={guntherPixi}
				/>
			</section>
			<hr />
			<section className='home-page__section-3'>
				<ItemSummary
					isImageOnRight={false}
					title='Racing Odds'
					text={racingOddsProjectDescription}
					image={betfairRace}
				/>
			</section>
			<hr />
			<section className='home-page__section-4'>
				<ItemSummary
					isImageOnRight={true}
					title='PS Ball'
					text={psBallProjectDescription}
					image={blueBall}
				/>
			</section>
			<hr />
			<section className='home-page__section-5'>
				<ItemSummary
					isImageOnRight={false}
					title='Next Project'
					text={nextProjectDescription}
					image={bmo}
				/>
			</section>
		</div>
	);
}
