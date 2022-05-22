import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Home from "../landingPage/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
function Routers() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Routers;
