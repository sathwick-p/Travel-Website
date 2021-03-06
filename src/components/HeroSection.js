import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import myVideo from "./videos/video-2.mp4";
export default function HeroSection() {
  console.log("Hero");
  return (
    <div className="hero-container">
      <video src={myVideo} autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}
