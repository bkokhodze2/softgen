import React, { useState, useEffect } from "react";

function SlideItem({ item }) {
	return (
		<div className="array_list">
			<div className="slider-item">
				<h2 className="slider-item__header">{item?.title.slice(0,50)}</h2>
				<p className="slider-item__paragraph">{item?.body.slice(0,100)}</p>
				<div className="slider-item__timeWrap">
					<svg id="time" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
						<path id="Path_5" data-name="Path 5" d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6.018,6.018,0,0,1,8,14ZM9,7.6l2.7,2.7-1.4,1.4L7,8.4V3H9Z" fill="#cbd0d3" />
					</svg>
					<p className="slider-item__time">
						<span> 2</span> min ago
					</p>
				</div>
			</div>
		</div>
	);
}

export default SlideItem;
