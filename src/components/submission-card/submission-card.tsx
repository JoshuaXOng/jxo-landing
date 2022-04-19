import React, { ReactElement } from "react";
import "./submission-card.css";

type SubmissionCardProps = {
	children: ReactElement;
	image: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
	title: string;
	info: string;
	controls: any;
}

export default function SubmissionCard (props: SubmissionCardProps) {
	const { image, title, info, controls } = props;

	return (
		<div className='submission-card'>
			<div className='submission-card__image-container'>
				{image}
			</div>
			<div className='submission-card__main-container'>
				<div className='submission-card__main-container__title'>{title}</div>
				<div>{info}</div>
			</div>
			<div className='submission-card__controls-container'>
				{controls}
			</div>
		</div>
	);
}

