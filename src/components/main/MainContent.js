import React from "react";
import World from "./world/World";
import Trending from "./trending/Trending";
import HappeningNow from "./happeningNow/HappeningNow";
function MainContent() {
	return (
		<>
			<World />
			<Trending />
			<HappeningNow />
		</>
	);
}

export default MainContent;
