import {useContext} from 'react'
import { FirebaseContext } from '../../context/firebaseContext';
 const Logout=()=> {
     const {auth}=useContext(FirebaseContext)
  return (
    <button onClick={()=>auth.signOut()}>Logout</button>
  )
}
export default Logout;