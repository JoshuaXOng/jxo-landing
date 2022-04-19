import React from "react";
import "./home-page.css";
import Button from "../../components/button/button";
import circleGunther from "../../../assets/circle-gunther.png";
import ItemSummary from "../../components/item_summary/item_summary";
import { calanderProjectDescription, nextProjectDescription } from "../../../assets/messages";
import adventureTimeCalendar from "../../../assets/adventuretimecalendar.jpg";
import bmo from "../../../assets/bmo.png";

function HomePage () {
	return (
		<div data-cy='home-page' className='home-page'>
			<header data-cy='home-page__header' className='home-page__header'>
				<div className='home-page__header__image'>
					<img src={circleGunther}>
					</img>
				</div>
				<div className='home-page__header__title'>Stealing Jewels <br /> EVERY DAY!</div>
				<div className='home-page__header__additional'>
					<Button
						size={{ width: "10rem", height: "3rem" }}
					>
						RANDOM PROJECT
					</Button>
				</div>
				<div className="custom-shape-divider-bottom-1632882764">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 70 L0 16.48 0 0 1200 0 1200 70 Z" className="shape-fill"></path>
					</svg>
				</div>
			</header>
			<section className='home-page__section-1'>
				<ItemSummary
					title='Calendar'
					text={calanderProjectDescription}
					image={adventureTimeCalendar}
				/>
			</section>
			<hr />
			<section className='home-page__section-2'>
				<ItemSummary
					imgSide={1}
					title='Next Project'
					text={nextProjectDescription}
					image={bmo}
				/>
			</section>
		</div>
	);
}

export default HomePage;
