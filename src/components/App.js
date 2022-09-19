import React, {useState} from "react";
import AppRouter from "./AppRouter";
import {authService} from "../firebaseInstance";

function App(){
	console.log(authService.currentUser);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return(
		<>
			<AppRouter isLoggedIn={isLoggedIn}></AppRouter>
			<footer>&copy; {new Date().getFullYear()} Nwitter</footer>
		</>
	)
}

export default App