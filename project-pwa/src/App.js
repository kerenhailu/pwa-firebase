import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirebaseProvider from './context/firebaseContext';
function App() {
  console.log();
  return (
    <div className="App">
      <FirebaseProvider>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> 
      </FirebaseProvider>
      
    </div>
  );
}

export default App;
