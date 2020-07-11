import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import './App.css';

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

function Home() {
  const handleOnClickDefault = () => {
    store.addNotification({
      title: "Wonderful!",
      message: "teodosii@react-notifications-component",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      },
      
    })
  }
  return (
    <div>
      <button onClick={handleOnClickDefault}>Default</button>
    </div>
  )
}

export default App;
