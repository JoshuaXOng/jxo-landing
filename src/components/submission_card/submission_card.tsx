import React from "react";
import "./submission_card.css";

/**
 * A React component: a card that displays an image, text and buttons.
 *
 * @param {React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>} image
 *                          A JSX img tag (i.e. `<img></img>`) - the image to be displayed.
 * @param {string} title    Primary text of the card.
 * @param {string} info     Secondary text of the card.
 * @param {any} controls    Control elements of the card (i.e. `<button></button`, etc.).
 *
 */
function SubmissionCard ({ image, title, info, controls }: {
        image: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
        title: string, info: string,
        controls: any
    }) {
	return (
		<div className='jxo__card'>
			<div className='jxo__card__image-container'>
				{image}
			</div>
			<div className='jxo__card__main-container'>
				<div className='jxo__card__main-container__title'>{title}</div>
				<div>{info}</div>
			</div>
			<div className='jxo__card__controls-container'>
				{controls}
			</div>
		</div>
	);
}

export default SubmissionCard;
