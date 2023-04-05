import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyDxy3kK9AXCx6ublc-CnPySC1Q7TqR702U",
  
    authDomain: "olympus-app-a9ecc.firebaseapp.com",
  
    projectId: "olympus-app-a9ecc",
  
    storageBucket: "olympus-app-a9ecc.appspot.com",
  
    messagingSenderId: "1070901430561",
  
    appId: "1:1070901430561:web:1a6404addea96911d5d660",
  
    measurementId: "G-BNY8WBLRG2"
  
};
  
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}
