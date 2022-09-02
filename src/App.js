//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import ShopStore from "./components/shopStore/ShopStore";
import Error from "./components/Error";
import Legal from "./components/legal/Legal";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className="container-1">
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/store" element={<ShopStore />} />
					<Route path="/legal" element={<Legal />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
