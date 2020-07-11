import React from 'react'
import { store } from 'react-notifications-component';

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

export default Home
