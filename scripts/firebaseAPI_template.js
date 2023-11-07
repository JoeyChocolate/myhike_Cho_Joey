// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAku8Yjl7PnEy7oWymnOT53_tRpNiHovCE",
    authDomain: "fir-comp1800-202330-c981a.firebaseapp.com",
    projectId: "fir-comp1800-202330-c981a",
    storageBucket: "fir-comp1800-202330-c981a.appspot.com",
    messagingSenderId: "973172545467",
    appId: "1:973172545467:web:dc1fcb749513dfbfa0569e"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();