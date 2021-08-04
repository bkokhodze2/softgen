import React from "react";
import Social from "./Social";
function Footer() {
	return (
		<div className="footer">
			<div className="footer__wrap">
				<div className="footer__navWrap">
					<div className="footer__logo">logo</div>
					<div className="footer__nav nav">
						<div className="nav__col">
							<div className="nav__items">
								<a className="nav__link">Home</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Discovery</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Photos</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Contact</a>
							</div>
						</div>
						<div className="nav__col">
							<div className="nav__items">
								<a className="nav__link">About</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Help</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Terms</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Guidlines</a>
							</div>
						</div>
						<div className="nav__col">
							<div className="nav__items">
								<a className="nav__link">Testimonials</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Advertise</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Integrations</a>
							</div>
							<div className="nav__items">
								<a className="nav__link">Careers</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__contact contact">
					<div className="contact__email">
						<div className="contact__input-container">
							<input className="contact__input" placeholder="Email"></input>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
								<path id="send" d="M10,16,8,8,0,6,16,0Z" fill="#fff" />
							</svg>
						</div>
						<p className="contact__p">Stay in touch with us for the freshest products!</p>
					</div>
					<Social />
				</div>
			</div>
		</div>
	);
}

export default Footer;
