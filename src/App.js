import React from "react";
import Mansion from "./images/mansion.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Mansion} alt="Bletchley Park Mansion" />
        <p>Girls Code MK</p>
        <p>
          Hello and Welcome! Our office is located in Bletchley Park, the home
          of the 'codebreakers'
        </p>
        <p>To book a place for our meetup use the following link</p>
        <a href="https://www.meetup.com/Girls-Code-Learn-to-Code-with-Other-Girls-and-Women/messages/boards/thread/51951778">
          Book Here
        </a>
        <p>Events - coming soon - Django Girls</p>
      </header>
    </div>
  );
}

export default App;
