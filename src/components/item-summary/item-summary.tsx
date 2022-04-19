import React from "react";
import "./item-summary.css";

type ItemSummaryProps = {
	title: string;
	text: string;
	image: string;
	isImageOnRight: boolean;
}

export function ItemSummary (props: ItemSummaryProps) {
	const { title, text, image, isImageOnRight } = props;

	return (
		<div data-cy='item-summary' className={isImageOnRight ? "item-summary--img-on-right" : "item-summary"}>
			<div className='item-summary__title'>{title}</div>
			<div className='item-summary__text'>{text}</div>
			<img className='item-summary__image' src={image} />
		</div>
	);
}
