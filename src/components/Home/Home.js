import React from "react";
import Discover from "./Discover";
import FreeReading from "./FreeReading";
import Hero from "./Hero";
import StartWriting from "./StartWriting";

const Home = () => {
  return (
    <div>
      <Hero />
      <FreeReading />
      <Discover />
      <StartWriting />
    </div>
  );
};

export default Home;
