//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/main/landingPage/LandingPage";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="container-1">
			<Header />
			<LandingPage />
			<Footer />
		</div>
	);
}

export default App;
