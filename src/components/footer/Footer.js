import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer_section">
			<div className="upper_footer">
				<div className="logo">
					<img alt="logo_pic" src="" className="logo_img" />
					<div className="logo_text"> buildNbox </div>
				</div>

				<div className="shop_section">
					<div className="logo_text"> Shop </div>
					<ul className="shop_categories">
						<li>
							<a href="/">CPU</a>
						</li>
						<li>
							<a href="/">Motherboard</a>
						</li>
						<li>
							<a href="/">Storage</a>
						</li>
						<li>
							<a href="/">RAM</a>
						</li>
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
			</div>

			<div className="lower_footer">
				<div className="legal_item logo_text">
					<a href="/">Terms and Conditions</a>
				</div>

				<div className="legal_item logo_text">
					<a href="/">Privacy Policy</a>
				</div>

				<div className="legal_item logo_text">
					<a href="/">Affiliate Program Disclaimer</a>
				</div>
			</div>
		</div>
	);
}
