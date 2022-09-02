import React from "react";
import products from "../../products";
import ShopSection from "./shopSection/ShopSection";
//import { client } from "../../lib/client";

const ShoptStore = () => {
	//console.log(productsData);
	//change products to productsData to retrieve from Sanity
	const retrieved = products.map((type, index) => {
		return (
			<div className="shop_page">
				<div key={index} className="shop_type" id={type.partType}>
					{type.partType}
				</div>
				<div className="shopping_section">
					{type.parts.map((part, index) => {
						return <ShopSection key={index} name={part.partName} price={part.partPrice} img={part.partImg} />;
					})}
				</div>
			</div>
		);
	});

	return <div>{retrieved}</div>;
};

// export const getServerSideProps = async () => {
// 	const query = '*[_type == "Product"]';
// 	const productsData = await client.fetch(query);

// 	return {
// 		props: { productsData }
// 	}
// }

export default ShoptStore;
