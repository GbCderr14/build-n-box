import React from "react";
import "./ShopSection.css";

const ShopSection = (props) => {
	return (
		<div className="part_card">
			<div className="part_card_upper">
				<a href="/">
					<div className="part_img">
						<img alt="part_img" src={props.img} />
					</div>
					<div className="part_name">{props.name}</div>
					{/* <div className="part_price">Price: ${props.price}</div> */}
				</a>
			</div>
			<div className="part_link">
				<div className="part_price">Price: ${props.price}</div>
				<a href="https://www.google.ca/">
					<button>View&nbsp;on&nbsp;Amazon</button>
				</a>
			</div>
		</div>
	);
};

export default ShopSection;
