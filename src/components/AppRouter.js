import React, {useState} from "react";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter =  ({isLoggedIn}) => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={isLoggedIn ? <Home/> : <Auth/>}></Route>
			</Routes>
		</BrowserRouter>
		)
}

export default AppRouter;