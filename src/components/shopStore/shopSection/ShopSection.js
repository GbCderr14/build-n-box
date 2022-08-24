import React from "react";

const ShopSection = (props) => {
	return (
		<div>
			<div>{props.name}</div>
			<div>${props.price}</div>
		</div>
	);
};

export default ShopSection;
