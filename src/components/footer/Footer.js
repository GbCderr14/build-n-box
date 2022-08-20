import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer_section">
			<div className="logo">
				<img alt="logo_pic" src="" className="logo_img" />
				<div className="logo_text"> buildNbox </div>
			</div>

			<div className="shop_section">
				<div className="logo_text"> Shop </div>
				<ul className="shop_categories">
					<li>CPU</li>
					<li>Motherboard</li>
					<li>Storage</li>
					<li>RAM</li>
				</ul>
			</div>

			<div className="reachus_section">
				<div className="logo_text"> Reach Us</div>
				<ul className="reach_us_options">
					<li>
						<a href="/"> Instragram </a>
					</li>
					<li>
						<a href="/"> Email </a>
					</li>
				</ul>
			</div>

			<div className="legal_section">
				<ul>
					<li>Terms and Conditions</li>
					<li>Privacy Policy</li>
					<li>Affiliate Program Disclaimer</li>
				</ul>
			</div>
		</div>
	);
}
