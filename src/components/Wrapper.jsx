import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Siderbar";

function Wrapper() {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Wrapper;
