import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/main/landingPage/LandingPage";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div>
			<div className="App">
				<Header />
			</div>
			<div>
				<LandingPage />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
