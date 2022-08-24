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
					<ul>
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
					<ul>
						<li>
							<a href="/"> Instragram </a>
						</li>
						<li>
							<a href="/"> Email </a>
						</li>
					</ul>
				</div>

				<div className="company_section">
					<div className="logo_text"> Company </div>
					<ul>
						<li>
							<a href="/">Terms&nbsp;and&nbsp;Conditions</a>
						</li>
						<li>
							<a href="/">Privacy&nbsp;Policy</a>
						</li>
						<li>
							<a href="/">Affiliate&nbsp;Program&nbsp;Disclaimer</a>
						</li>
					</ul>
				</div>
			</div>
			<p>© 2022, buildNbox.com</p>
		</div>
	);
}
