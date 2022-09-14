import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {

	apiKey: "AIzaSyCoeBAVjDM2VyObdvNFFrogtR80UGXIrEA",

	authDomain: "nwitter-1420c.firebaseapp.com",

	projectId: "nwitter-1420c",

	storageBucket: "nwitter-1420c.appspot.com",

	messagingSenderId: "394412570102",

	appId: "1:394412570102:web:89e237c179f3abdfea83d7"

};

export default firebase.initializeApp(firebaseConfig);