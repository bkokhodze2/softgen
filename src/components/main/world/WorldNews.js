import React from "react";
import worldNew from "../../../img/main/world/worldNews/world-news.png";
import img from "../../../img/main/world/worldNews/world-news.png";
function WorldNew() {
	return (
		<div className="world-container">
			<img className="world-container__img" src={img}></img>
			<div className="world-container__overlay">
				<div className="">
					<h1 className="world-container___header">WORLD NEWS</h1>
				</div>
				<div className="world-container__line"></div>
				<div className="">
					<h2 className="world-container__title">Amazing places in America to visit.</h2>
				</div>
				<div className="world-container__paragraph">
					<p>For some reason — this country, this city, this neighborhood, this particular street —  is the place you are living a majority of your life in.</p>
				</div>
				<div className="world-container__btn-wrap">
					<button className="btn world-container__btn">LEARN MORE</button>
				</div>
			</div>
		</div>
	);
}

export default WorldNew;
