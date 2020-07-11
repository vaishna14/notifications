import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import './App.css';
import Home from "./Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Notifications</h1>
        <ReactNotification />
        <Home />
      </header>
    </div>
  );
}


export default App;
