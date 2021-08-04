import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import profileImg from "../../img/header/user-logo.png";
import Social from "../footer/Social";
function Header() {
	const [open, setOpen] = useState(false);
	const [clickedOutside, setClickedOutside] = useState(false);
	const ref = useRef();

	const handleClickOutside = (e) => {
		if (!ref.current.contains(e.target)) {
			setOpen(false);
		}
	};
	const handleClickInside = () => setOpen(true);
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	});

	const openMenu = () => {
		setOpen(true);
	};
	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<div className="header">
			<div onClick={openMenu} className="header__burger">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
					<rect id="Rectangle_434" data-name="Rectangle 434" width="16" height="2" rx="1" fill="#343638" />
					<rect id="Rectangle_435" data-name="Rectangle 435" width="10" height="2" rx="1" transform="translate(0 6)" fill="#343638" />
					<rect id="Rectangle_436" data-name="Rectangle 436" width="16" height="2" rx="1" transform="translate(0 12)" fill="#343638" />
				</svg>
			</div>
			<div ref={ref} onClick={handleClickInside} className={open ? "hamburger hamburger--active" : "hamburger"}>
				<div className="hamburger__top-wrap">
					<p onClick={closeMenu} className="hamburger__logo">
						logo
					</p>
					<div className="hamburger__nav-item">
						<svg className="hamburger__svg" id="home" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
							<path id="home-2" data-name="home" d="M0,8,8,0l8,8v8H11V10H5v6H0Z" fill="#343638" fill-rule="evenodd" />
						</svg>
						<p className="hamburger__nav-link hamburger__nav-link--active">HOME</p>
					</div>
					<div className="hamburger__nav-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
							<path id="discover" d="M12,4,6.7,6.7,4,12,9.3,9.3ZM8,16a8,8,0,1,1,8-8A8.024,8.024,0,0,1,8,16Z" fill="#343638" fill-rule="evenodd" />
						</svg>
						<p className="hamburger__nav-link">DISCOVERY</p>
					</div>
					<div className="hamburger__nav-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
							<path id="photos" d="M0,0V14H16V0ZM14,12H11L6.5,7.5,2,12V2H14Z" fill="#343638" fill-rule="evenodd" />
						</svg>
						<p className="hamburger__nav-link">PHOTOS</p>
					</div>
					<div className="hamburger__nav-item">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12">
							<path id="mail" d="M0,0V12H16V0ZM8,8,2,2H14Z" fill="#343638" fill-rule="evenodd" />
						</svg>
						<p className="hamburger__nav-link">CONTACT</p>
					</div>
					<div className="hamburger__nav-item">
						<img className="hamburger__profile-img" src={profileImg} alt="profile image"></img>
						<p className="hamburger__nav-link">PROFILE</p>
					</div>
				</div>
				<div className="hamburger__bottom-wrap bottom-nav">
					<div className="bottom-nav__col-wrap">
						<div className="bottom-nav__col">
							<a>ABOUT</a>
							<a>HELP</a>
							<a>TERMS</a>
							<a>GUIDLINES</a>
						</div>
						<div className="bottom-nav__col">
							<a>TESTIMONIALS</a>
							<a>ADVERTISE</a>
							<a>INTEGRATIONS</a>
							<a>CAREERS</a>
						</div>
					</div>

					<div className="bottom-nav__social">
						<Social />
					</div>
				</div>
			</div>
			<div className="header__logo">
				<p>LOGO</p>
			</div>
			<Menu />
		</div>
	);
}

export default Header;
