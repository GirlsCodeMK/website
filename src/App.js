import React from "react";
import Mansion from "./images/mansion.jpeg";
import logo from "./images/logo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="https://girlscodemk.herokuapp.com/">
        <img src={logo} alt="Girls Code MK Logo" />
      </a>
      <header className="App-header">
        <img src={Mansion} alt="Bletchley Park Mansion" />
        <p>Girls Code MK</p>
        <p>
          This has changed We support girls and women in their coding journey by
          offering free workshops and meetups for members of all ages and
          skills.
        </p>
        <p>To book a place for our meetup use the following link</p>
        <a href="https://www.meetup.com/women-Code-Learn-to-Code-with-Other-women-and-Woen/messages/boards/thread/51951778">
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
