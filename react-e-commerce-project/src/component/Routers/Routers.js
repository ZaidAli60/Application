import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "../config/Firebase";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Home from "../landingPage/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import Admin from "../Pages/admin/Admin";
function Routers() {
  const [currentUser, setcurrentUser] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return setcurrentUser(true);
      } else {
        return setcurrentUser(false);
      }
    });
  }, [currentUser]);

  return (
    <>
      <BrowserRouter>
        <Navbar currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routers;
