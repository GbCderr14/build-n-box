import React from "react";
import LandingPage from "./landingPage/LandingPage";
import ShopCategories from "./shopCategory/ShopCategories";

const Main = () => {
	return (
		<div>
			<div className="hero">
				<div className="vid_wrapper">
					<video className="video" autoPlay loop muted>
						<source src="/LandingPageVid.mp4" type="video/mp4" />
					</video>
				</div>
				<div className="hero_content">
					<LandingPage />
				</div>
			</div>
			<div className="categories">
				<p>Shop by Category</p>
			</div>
			<ShopCategories />
		</div>
	);
};

export default Main;
