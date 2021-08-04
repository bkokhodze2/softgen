import React, { Component } from "react";
import Slider from "react-slick";
import TrendingItem from "./TrendingItem";

export default class Trending extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	render() {
		const settings = {
			infinite: true,
			lazyLoad: true,
			speed: 300,
			slidesToShow: 3,
			centerMode: false,
			centerPadding: 20,
			arrows: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 720,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<div className="trending">
				<div className="trending__arrow-wrap">
					<div className="trending__title">
						<h2 className="trending__h2">TRENDING</h2>
					</div>
					<div className="more-news__arrow">
						<button className="button more-news__arrow-prev" onClick={this.previous}>
							<svg id="arrow_back" data-name="arrow back" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
								<path id="arrow_back-2" data-name="arrow back" d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z" transform="translate(6 0) rotate(90)" />
							</svg>
						</button>
						<button className="button more-news__arrow-next" onClick={this.next}>
							<svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
								<path id="arrow-2" data-name="arrow" d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z" transform="translate(0 10) rotate(-90)" fill="#202124" />
							</svg>
						</button>
					</div>
				</div>
				<Slider ref={(c) => (this.slider = c)} {...settings}>
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
				</Slider>
			</div>
		);
	}
}
