import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirebaseProvider from './context/firebaseContext';
import Login from './component/parts/Login-component';
import Logout from './component/parts/Logout-component';
// import firebaseConfig from './firebase';
function App() {
  // console.log(process.env.API_KEY);
  // console.log(firebaseConfig.apiKey);
  return (
    <div className="App">
      <FirebaseProvider>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login/>
        <Logout/>
      </header> 
       </FirebaseProvider>
    </div>
 );
}

export default App;
