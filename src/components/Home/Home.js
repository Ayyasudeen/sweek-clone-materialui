import React from "react";
import Discover from "./Discover";
import FreeReading from "./FreeReading";
import Hero from "./Hero";
import JoinWriting from "./JoinWriting";
import StartUsing from "./StartUsing";
import StartWriting from "./StartWriting";
import TurnStories from "./TurnStories";

const Home = () => {
  return (
    <div>
      <Hero />
      <FreeReading />
      <Discover />
      <StartWriting />
      <JoinWriting />
      <TurnStories />
      <StartUsing />
    </div>
  );
};

export default Home;
