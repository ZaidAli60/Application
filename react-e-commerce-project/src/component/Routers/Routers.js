import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
function Routers() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Routers;
