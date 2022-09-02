import React from "react";
import ShopCategory from "./ShopCategory";
import { HashLink as Link } from "react-router-hash-link";
//import { Link } from "react-router-dom";

const ShopCategories = () => {
	return (
		<div className="category_section">
			<Link to="/store#CPU">
				<ShopCategory img="/media/CPU2.png" catName="CPU" />
			</Link>
			<Link to="/store#Motherboard">
				<ShopCategory img="/media/motherboard2.jpeg" catName="Motherboard" />
			</Link>
			<Link to="/store#SSD">
				<ShopCategory img="/media/ssd2.webp" catName="SSD" />
			</Link>
			<Link to="/store#RAM">
				<ShopCategory img="/media/ram3.jpeg" catName="RAM" />
			</Link>
		</div>
	);
};

export default ShopCategories;
