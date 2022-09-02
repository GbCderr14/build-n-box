import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header_section">
			<Link to="/">
				<div className="logo">
					<img alt="logo_pic" src="" className="logo_img" />
					<div className="logo_text"> buildNbox </div>
				</div>
			</Link>

			<div className="nav_elements">
				<div>
					<a href="/">
						<Link to="/store">
							<span className="keepTogether">Shop&nbsp;by&nbsp;Parts </span>
						</Link>
					</a>
				</div>
				<div>
					<a href="/"> Cart </a>
				</div>
			</div>
		</div>
	);
}
