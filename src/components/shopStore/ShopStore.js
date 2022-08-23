import React from "react";
import products from "../../products";
import ShopSection from "./shopSection/ShopSection";

const ShoptStore = () => {
	const retrieved = products.map((type) => {
		return (
			<div>
				<ShopSection partName={type.partName} price={type.price} />
			</div>
		);
	});

	return (
		<div>
			<h1>{products[0].partType}</h1>
			{retrieved}
		</div>
	);
};

export default ShoptStore;
