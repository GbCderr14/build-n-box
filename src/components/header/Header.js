import React from "react";
import "./Header.css";

export default function Header() {
	return (
		<div className="header_section">
			<div className="logo">
				<img alt="logo_pic" src="" className="logo_img" />
				<div className="logo_text"> buildNbox </div>
			</div>

			<div className="nav_elements">
				<div>
					<a href="/"> Shop Parts </a>
				</div>
				<div>
					<a href="/"> Cart </a>
				</div>
			</div>
		</div>
	);
}
