import React from 'react'
import firebase from "firebase/compat/app";
import firebaseConfig from '../../firebase';
import {useAuthState} from "react-firebase-hooks/auth"

firebase.initializeApp(firebaseConfig);
const firebaseAuth=firebase.auth();

export const FirebaseContext=React.createContext();
const FirebaseProvider=({children})=>{
  const [user]=useAuthState(firebaseAuth)
  return (
      <FirebaseContext.Provider value={children}>
       <div>context</div>   
      </FirebaseContext.Provider>
    
  )
}
export default FirebaseProvider;
