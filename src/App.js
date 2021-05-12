import React, {useState, useEffect} from 'react'
import './App.css';
// import RenderObjs from './renderObjs/RenderObjs.js'
import RenderObjs from './renderObjs/renderObjects'
import TopHeader from './websiteHeader/headerComponent'
// import TopHeader from 'react-menu-header-profile'
import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBwjrc-y5RlTlakFnjjWLK8zGM_yc3lBqw",
  authDomain: "ecom-d48ae.firebaseapp.com",
  projectId: "ecom-d48ae",
  storageBucket: "ecom-d48ae.appspot.com",
  messagingSenderId: "565201802118",
  appId: "1:565201802118:web:645ef7c6b1e3d002a6d207",
  measurementId: "G-T27LPRXGDQ"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const topLevelFunction = () => console.log('hard pass')
  const arrayMenu1=[{name: 'Apple', image: 'img', callBack: topLevelFunction}, {name: 'SamSam', image: 'img'}]
  const[user] = useAuthState(auth)
  const signInWithGoogle = () => {
    // return console.log('signInG triggered')
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  } 
  const arrayProfileMenu=[{name: 'Login', callBack: signInWithGoogle}]

  const objInDataBase = firestore.collection('obj') 
  // const query = objInDataBase.orderBy('').limit(25)
  const [objs] = useCollectionData(objInDataBase)

  useEffect(() => {
      objInDataBase.add({
        test: 'this is a test',
        idTest: Math.random()*1000
      });
  }, []);
 
  return (
    <div className="App">
      {user ? console.log('logged in') : console.log(user)}
      {
        // objs.map((obj) => console.log('obj', obj))
      // <button onClick={signInWithGoogle}></button>
      }
      <TopHeader arrayMenu={arrayMenu1} arrayProfileMenu={arrayProfileMenu}/>
      <RenderObjs/>
    </div>
  );
}

export default App;
