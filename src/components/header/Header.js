import React from "react";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<div classname="logo">
				<span>build N box</span>
				<img alt="logo_img" />
			</div>

			<div className="nav_elments">
				<ul>
					<li> Home </li>
					<li> Shop by Category </li>
					<li> About Us </li>
					<li> Sign in </li>
				</ul>
			</div>
		</header>
	);
}
