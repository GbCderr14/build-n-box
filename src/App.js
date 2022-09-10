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
				<div>
					<Header />
				</div>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<Main />{" "}
							</div>
						}
					/>
					<Route
						path="/store"
						element={
							<div>
								<ShopStore />
							</div>
						}
					/>
					<Route
						path="/legal"
						element={
							<div>
								<Legal />{" "}
							</div>
						}
					/>
					<Route
						path="*"
						element={
							<div>
								<Error />
							</div>
						}
					/>
				</Routes>
				<div className="footer-comp">
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
