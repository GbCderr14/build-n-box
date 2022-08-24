import React from "react";
import products from "../../products";
import ShopSection from "./shopSection/ShopSection";

const ShoptStore = () => {
	const retrieved = products.map((type, index) => {
		return (
			<div>
				<div key={index}>{type.partType}</div>
				{type.parts.map((part, index) => {
					return <ShopSection key={index} name={part.partName} price={part.partPrice} />;
				})}
			</div>
		);
	});

	return <div>{retrieved}</div>;
};

export default ShoptStore;
