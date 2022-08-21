//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/main/landingPage/LandingPage";
import Footer from "./components/footer/Footer";
import ShopCategory from "./components/main/shopCategory/ShopCategory";

function App() {
	return (
		<div className="container-1">
			<div className="hero">
				<video className="video" autoPlay loop muted>
					<source src="/LandingPageVid.mp4" type="video/mp4" />
				</video>
				<div className="hero_content">
					<Header />
					<LandingPage />
				</div>
			</div>
			<ShopCategory />
			<Footer />
		</div>
	);
}

export default App;
