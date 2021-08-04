import React from "react";
import HappeningLeft from "./HappeningLeft";
import HappeningRight from "./HappeningRight";
function HappeningNow() {
	return (
		<div className="happening-now">
			<div className="happening-now__head">
				<h2 className="happening-now__h2">HAPPENING NOW</h2>
			</div>
			<div className="happening-now__body">
				<HappeningLeft />
				<HappeningRight />
			</div>
		</div>
	);
}

export default HappeningNow;
