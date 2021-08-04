import React from "react";
import img1 from "../../../img/happeningLeft/happening-left1.png";
function HappeningLeftItem() {
	return (
		<div className="happening-left-item">
			<img className="happening-left-item__img" src={img1}></img>
			<div className="happening-left-item__header">CITY</div>
			<div className="happening-left-item__overlay">
				<h2 className="happening-left-item__title">Large article title</h2>
				<p className="happening-left-item__paragraph">Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum vis eu, inermis eloquentiam.</p>
				<div className="happening-left-item__clock">
					<svg id="time" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
						<path id="Path_5" data-name="Path 5" d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6.018,6.018,0,0,1,8,14ZM9,7.6l2.7,2.7-1.4,1.4L7,8.4V3H9Z" fill="#cbd0d3"></path>
					</svg>
					<p className="happening-left-item__time">
						<span>2</span> min ago
					</p>
				</div>
			</div>
		</div>
	);
}

export default HappeningLeftItem;
