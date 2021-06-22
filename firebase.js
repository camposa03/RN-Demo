import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVWkuRAdRV-kWziKE6PVV2tqPl3vqw6dc",
    authDomain: "rn-demo-ded66.firebaseapp.com",
    projectId: "rn-demo-ded66",
    storageBucket: "rn-demo-ded66.appspot.com",
    messagingSenderId: "657840957745",
    appId: "1:657840957745:web:cb2ce656c12fc0b4096810"
  };

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export { auth };