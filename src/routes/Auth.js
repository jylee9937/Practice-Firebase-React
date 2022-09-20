import React, {useState} from "react";
import {authService} from "../firebaseInstance";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(true);
	const onChange = (event) => {
		const {target: {name, value}} = event;
		if(name === "email"){
			setEmail(value);
		}else if(name === "password"){
			setPassword(value);
		}
	}

	const onSubmit = async (event)=> {
		event.preventDefault();
		try{
			let data;
			if(newAccount){
				data = await createUserWithEmailAndPassword(authService, email, password);
			}else{
				data = await signInWithEmailAndPassword(authService, email, password);
			}
			console.log(data);

		}catch(err){
			console.log(err);
		}
	}
	return(
		<>
			<form onSubmit={onSubmit}>
				<input name="email" type={"email"} placeholder={"Email"} value={email} onChange={onChange} required/>
				<input name="password" type={"password"} placeholder={"Password"} value={password}  onChange={onChange} required/>
				<input type={"submit"} value={newAccount ? "Create Account" : "Log In"}/>
			</form>
			<div>
				<button>
					Continue with Google
				</button>
				<button>
					Continue with github
				</button>
			</div>
		</>
	)
}

export default Auth;