import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="card" element={<Card />}></Route> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
