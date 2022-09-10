import React from "react";
import "./ShopCategory.css";

const ShopCategory = (props) => {
	return (
		<div className="card" id={props.catName}>
			<a href={"#" + props.catName} className="card_link">
				<div className="crop">
					<img className="cat_img" alt="some_pic" src={props.img} />
				</div>
				<div className="category_name">{props.catName}</div>
			</a>
		</div>
	);
};

export default ShopCategory;
