import React from "react";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import "./navbar.css";
import Buttoncomponent from "../button/button";
const Navbar = () => {
  return (
    <div class="wrapper">
      <Logo />
      <Menu />
      <Buttoncomponent />
    </div>
  );
};
export default Navbar;
