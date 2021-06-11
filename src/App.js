import React, {useState, useEffect} from 'react'
import './App.css';
// import RenderObjs from './renderObjs/RenderObjs.js'
import RenderObjs from './renderObjs/renderObjects'
import TopHeader from './websiteHeader/headerComponent'
// import TopHeader from 'react-menu-header-profile'
import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import {useDispatch} from 'react-redux'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {db, auth} from './firebaseConfig'

// const auth = firebase.auth()
// const firestore = firebase.firestore()

function App() {
  const dispatch = useDispatch()
  const topLevelFunction = () => console.log('hard pass')
  const arrayMenu1=[{name: 'Apple', image: 'img', callBack: topLevelFunction}, {name: 'SamSam', image: 'img'}]
  const[user] = useAuthState(auth)
  const signInWithGoogle = () => {
    // return console.log('signInG triggered')
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
    .then((response) => {
      dispatch({type: 'USER_DATA', payload: response })
      console.log('<<<<<<response', response)
    })
    .catch((error) => console.log('error', error))
  } 

  const objInDataBase = db.collection('obj1') 
  var testFirebase = () => {
    
    // objInDataBase.add({
    //       test: 'this is a testbabe',
    //       idTest: Math.random()*100
    //     });
    db.collection('Items').doc().get()
    .then((resp)=> console.log(resp, 'whats in firebase'))
    .catch((error) => console.log(error, "error"))

  }
  const arrayProfileMenu=[{name: 'Login', callBack: signInWithGoogle}, {name: 'POST RAND', callBack: testFirebase}]

  // const query = objInDataBase.orderBy('').limit(25)
  const [objs] = useCollectionData(objInDataBase)

  useEffect(() => {
    firebase.firestore().collection("New test").doc().set({"name":"john R"});
    // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //   console.log(idToken, 'idToken')
    // }).catch(function(error) {
    //   console.log(error)
    // });
      // objInDataBase.add({
      //   test: 'this is a test abckj',
      //   idTest: Math.random()*1000
      // });

      // testFirebase = objInDataBase.add({
      //   test: 'this is a',
      //   idTest: Math.random()*100
      // });



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
