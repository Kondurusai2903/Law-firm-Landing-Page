import React from "react";
import heroimg from "../../../assests/humanimage.png";
import "./imgcomponent.css";
const Imgcomponent = () => {
  return (
    <div className="wrapper">
      <div className="back">
        <img src={heroimg} alt="heroimage" />
      </div>
    </div>
  );
};

export default Imgcomponent;
