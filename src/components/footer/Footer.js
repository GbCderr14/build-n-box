import React from "react";
import "./Footer.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
	return (
		<div className="footer_section">
			<div className="upper_footer">
				<Link to="/">
					<div className="logo">
						<img alt="logo_pic" src="" className="logo_img" />
						<div className="logo_text"> buildNbox </div>
					</div>
				</Link>

				<div className="shop_section">
					<div className="logo_text"> Shop </div>
					<ul>
						<li>
							<Link to="/store#CPU">CPU</Link>
						</li>
						<li>
							<Link to="/store#Motherboard">Motherboard</Link>
						</li>
						<li>
							<Link to="/store#SSD">Storage</Link>
						</li>
						<li>
							<Link to="/store#RAM">RAM</Link>
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
							<Link to="/legal#tnc">Terms&nbsp;and&nbsp;Conditions</Link>
						</li>
						<li>
							<Link to="/legal#pp">Privacy&nbsp;Policy</Link>
						</li>
						<li>
							<Link to="/legal#apd">Affiliate&nbsp;Program&nbsp;Disclaimer</Link>
						</li>
					</ul>
				</div>
			</div>
			<p>© 2022, buildNbox.com</p>
		</div>
	);
}
