import { combineReducers } from "redux";
import objsReducer from './objsReducer.js'
import firebaseReducer from './firebaseReducer.js'

let rootReducer =  combineReducers({
    objsArray: objsReducer,
    firebaseData: firebaseReducer,
});

export default rootReducer