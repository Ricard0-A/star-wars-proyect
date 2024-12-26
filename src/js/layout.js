import React, {useContext, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext, {Context} from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Details } from "./views/details";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	const {store, actions} = useContext(Context);
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>  
						<Route exact path="/" element={<Home />} /> 
						<Route path="/:resource/:uid" element={<Details />} /> 
						<Route path="*" element={<h1>Not found!</h1>} /> 
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
