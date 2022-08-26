import React from "react";
import products from "../../products";
import ShopSection from "./shopSection/ShopSection";

const ShoptStore = () => {
	const retrieved = products.map((type, index) => {
		return (
			<div className="shop_page">
				<div key={index} className="shop_type">
					{type.partType}
				</div>
				<div className="shop_section">
					{type.parts.map((part, index) => {
						return <ShopSection key={index} name={part.partName} price={part.partPrice} />;
					})}
				</div>
			</div>
		);
	});

	return <div>{retrieved}</div>;
};

export default ShoptStore;
