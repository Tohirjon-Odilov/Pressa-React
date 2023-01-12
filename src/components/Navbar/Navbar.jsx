import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Navbar = () => {
  const [addNavbarStyle, setAddNavbarStyle] = useState("header");
  const changeBgNavbar = () => {
    if (window.scrollY > 0) {
      return setAddNavbarStyle("header fixed");
    }
    return setAddNavbarStyle("header");
  };
  window.addEventListener("scroll", changeBgNavbar);
  return (
    <div className="site-header">
      <div className="container">
        <header className={addNavbarStyle}>
          <div className="logo-wrapper">
            <Link to={"/home"}>Pressa</Link>
            {/* <div className="wrapper"> */}
            <div className="input-wrapper">
              <input type="text" placeholder="Izlash" />
            </div>
            {/* </div> */}
          </div>
          <ul>
            <li>
              <Link to={"/haqimizda"}>Biz haqimizda</Link>
            </li>
            <li>
              <Link to={"/question"}>Savol va javoblar</Link>
            </li>
            <li>
              <Link to={"/elon"}>E’lon berish</Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
