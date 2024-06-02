import React from "react";
import img1 from "../../assests/symbol.png";
import "./logo.css";
const Logo = () => {
  return (
    <div className="wrapper">
      <img src={img1} alt="logo" className="logo" />
      <div className="logo-text">IGSTUDIO</div>
    </div>
  );
};

export default Logo;
