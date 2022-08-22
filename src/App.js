//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/main/landingPage/LandingPage";
import Footer from "./components/footer/Footer";
import ShopCategories from "./components/main/shopCategory/ShopCategories";

function App() {
	return (
		<div className="container-1">
			<Header />
			<div className="hero">
				<video className="video" autoPlay loop muted>
					<source src="/LandingPageVid.mp4" type="video/mp4" />
				</video>
				<div className="hero_content">
					<LandingPage />
				</div>
			</div>
			<div className="categories">
				<p>Shop by Category</p>
			</div>
			<ShopCategories />
			<Footer />
		</div>
	);
}

export default App;
