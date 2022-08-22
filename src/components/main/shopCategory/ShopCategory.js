import React from "react";
import "./ShopCategory.css";

const ShopCategory = (props) => {
	return (
		<div className="card">
			<a href="/" className="card_link">
				<div className="crop">
					<img className="cat_img" alt="some_pic" src={props.img} />
				</div>
				<div>{props.catName}</div>
			</a>
		</div>
	);
};

export default ShopCategory;
