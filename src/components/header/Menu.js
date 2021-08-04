import React, { useEffect, useRef, useState } from "react";
import UserLogo from "../../img/header/user-logo.png";

function Menu() {
	const [openDropdown, setOpenDropdown] = useState(false);
	const ref = useRef();

	const handleClickOutside = (e) => {
		if (!ref.current.contains(e.target)) {
			setOpenDropdown(false);
		}
	};
	const handleClickInside = () => setOpenDropdown(true);
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	});

	return (
		<div className="menu">
			<div onClick={() => setOpenDropdown(true)} className="menu__item menu__item-active">
				<p>HOME</p>
				<div ref={ref} onClick={handleClickInside} className={openDropdown ? "menu__dropdown menu__dropdown--active" : "menu__dropdown"}>
					<a>WORLD NEWS</a>
					<a>TRAVEL</a>
					<a className="menu__dropdownLink--active">TECHNOLOGY</a>
					<a>CITY</a>
					<a>CULTURE</a>
					<a>MORE…</a>
				</div>
			</div>
			<div className="menu__item">
				<p>DISCOVERY</p>
			</div>
			<div className="menu__item">
				<p>PHOTOS</p>
			</div>
			<div className="menu__item">
				<p>CONTACT</p>
			</div>
			<div className="menu__user">
				<img className="menu__img" src={UserLogo} alt="user-logo"></img>
			</div>
		</div>
	);
}

export default Menu;
