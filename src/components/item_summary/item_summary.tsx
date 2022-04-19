import React from "react";
import "./item_summary.css";

function ItemSummary (props: any) {
	const size = props.size;
	const title = props.title;
	const text = props.text;
	const image = props.image;
	const imgSide = props.imgSide;

	const itemSummaryStyle = {
		width: size ? size.width : undefined,
		height: size ? size.height : undefined
	};

	return (
		<div data-cy='item-summary' className={imgSide ? "item-summary--img-on-right" : "item-summary"} style={itemSummaryStyle}>
			<div className='item-summary__title'>{title}</div>
			<div className='item-summary__text'>{text}</div>
			<img className='item-summary__image' src={image} />
		</div>
	);
}

export default ItemSummary;
