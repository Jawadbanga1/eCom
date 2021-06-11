import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBwjrc-y5RlTlakFnjjWLK8zGM_yc3lBqw",
  authDomain: "ecom-d48ae.firebaseapp.com",
  projectId: "ecom-d48ae",
  storageBucket: "ecom-d48ae.appspot.com",
  messagingSenderId: "565201802118",
  appId: "1:565201802118:web:645ef7c6b1e3d002a6d207",
  measurementId: "G-T27LPRXGDQ"
}

// if (!firebase.apps.length) {
    // firebase.initializeApp(DB_CONFIG);
    const firebaseApp = firebase.initializeApp(firebaseConfig);
//  }

export const auth = firebase.auth();

export const db = firebaseApp.firestore();

export default firebase;