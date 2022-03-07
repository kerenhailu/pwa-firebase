import {useContext} from 'react'
import { FirebaseContext } from '../../context/firebaseContext';
 import firebase from 'firebase/compat/app';
 import "firebase/compat/auth"
 const Login=()=> {
   const {auth,user}=useContext(FirebaseContext)
  //  console.log(auth);
   const googleLogin=()=>{
     const GoogleProvider=new firebase.auth.GoogleAuthProvider();
     auth.signInWithPopup(GoogleProvider);
   };
   return (
     <div>
       {user?.displayName}
       <h1>Login-component</h1>
<button onClick={googleLogin}>click to Google</button>
     </div>
   )
 }
  export default Login;