//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import ShoptStore from "./components/shopStore/ShopStore";

const App = () => {
	return (
		<div className="container-1">
			<Header />
			<Main />
			<ShoptStore />
			<Footer />
		</div>
	);
};

export default App;
