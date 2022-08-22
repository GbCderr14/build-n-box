import React from "react";
import ShopCategory from "./ShopCategory";

const ShopCategories = () => {
	return (
		<div className="category_section">
			<ShopCategory img="/media/CPU2.png" catName="CPU" />
			<ShopCategory img="/media/motherboard2.jpeg" catName="Motherboard" />
			<ShopCategory img="/media/ssd2.webp" catName="SSD" />
			<ShopCategory img="/media/ram3.jpeg" catName="RAM" />
		</div>
	);
};

export default ShopCategories;
