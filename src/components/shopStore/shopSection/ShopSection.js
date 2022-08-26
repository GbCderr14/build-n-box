import React from "react";
import "./ShopSection.css";

const ShopSection = (props) => {
	return (
		<div className="part_card">
			<a href="/">
				<div className="part_img"></div>
				<div className="part_name">{props.name}</div>
				<div className="part_price">${props.price}</div>
			</a>
			<div className="part_link">
				<a href="https://www.google.ca/">
					<button>view&nbsp;on&nbsp;amazon</button>
				</a>
			</div>
		</div>
	);
};

export default ShopSection;
