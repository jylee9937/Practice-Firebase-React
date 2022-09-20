import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {

	apiKey: "AIzaSyCoeBAVjDM2VyObdvNFFrogtR80UGXIrEA",

	authDomain: "nwitter-1420c.firebaseapp.com",

	projectId: "nwitter-1420c",

	storageBucket: "nwitter-1420c.appspot.com",

	messagingSenderId: "394412570102",

	appId: "1:394412570102:web:89e237c179f3abdfea83d7"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const authService = getAuth(app);
