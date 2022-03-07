import { useState ,useEffect,createContext} from 'react'
import firebase from "firebase/compat/app";
import firebaseConfig from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import "firebase/compat/auth";

firebase.initializeApp(firebaseConfig);
const firebaseAuth=firebase.auth();

export const FirebaseContext=createContext();
const FirebaseProvider=({children})=>{
  const [user]=useAuthState(firebaseAuth);
  const [auth,setAuth]=useState(null);
  useEffect(()=>{
    setAuth(user)
  },[])
  return (
      <FirebaseContext.Provider value={{user,auth}}>
       {children}
      </FirebaseContext.Provider>
    
  )
}
export default FirebaseProvider;
