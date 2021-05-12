import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import rootReducer from './redux/reducers'
// import {Provider} from 'react-redux'
// import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBwjrc-y5RlTlakFnjjWLK8zGM_yc3lBqw",
  authDomain: "ecom-d48ae.firebaseapp.com",
  projectId: "ecom-d48ae",
  storageBucket: "ecom-d48ae.appspot.com",
  messagingSenderId: "565201802118",
  appId: "1:565201802118:web:645ef7c6b1e3d002a6d207",
  measurementId: "G-T27LPRXGDQ"
}

// firebase.initializeApp(firebaseConfig);

// const store = createStore(rootReducer)

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
