import React from "react";
import Imagecomponent from "./imgcomponent/imgcomponent";
import Herotextcomponent from "./herotextcomponent/herotextcomponent";
import "./hero.css";
const Hero = () => {
  return (
    <div class="wrapper">
      <Herotextcomponent />
      <Imagecomponent />
    </div>
  );
};

export default Hero;
