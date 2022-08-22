import React from "react";
import "./ShopCategory.css";

const ShopCategory = (props) => {
	return (
		<div className="card">
			<img className="cat_img" alt="some_pic" src={props.img} />
			<div>{props.catName}</div>
		</div>
	);
};

export default ShopCategory;
