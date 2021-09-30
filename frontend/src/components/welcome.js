import React from "react";
import video from "../assets/welcome_video_bg.mp4";
import { Link } from "react-router-dom";
import "../scss/welcomeScreen.scss";

export function WelcomeScreen(props) {
  return (
    <div className="welcomeScreen">
      <video autoplay = "autoplay" loop = "true" muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="overlay"></div>
      <main>
        <h1> Queens Botanical Garden</h1>
        <h2> Digital Guide </h2>
        <Link to="/home" className="button">
          Start
        </Link>
      </main>
    </div>
  );
}

const exported = { WelcomeScreen };
export default exported;
