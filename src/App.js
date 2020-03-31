import React from "react";
import Mansion from "./images/mansion.jpeg";
import logo from "./images/logo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="header">
        <a
          href="https://girlscodemk.herokuapp.com/"
          img
          src={logo}
          alt="Girls Code MK Logo"
        ></a>
      </div>
      <header className="App-header">
        <img src={Mansion} alt="Bletchley Park Mansion" />
        <p>women Code MK</p>
        <p>
          Hello and Welcome! Our office is located in Bletchley Park, the home
          of the 'codebreakers'
        </p>
        <p>To book a place for our meetup use the following link</p>
        <a href="https://www.meetup.com/women-Code-Learn-to-Code-with-Other-women-and-Women/messages/boards/thread/51951778">
          Book Here
        </a>
        <p>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/283072310"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </p>
        <p>
          Events - coming soon * Django women - python website * Node School -
          Back end development for beginners
        </p>
      </header>
    </div>
  );
}

export default App;
