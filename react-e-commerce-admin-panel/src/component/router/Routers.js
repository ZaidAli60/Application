import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Admin/Layout";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route /> */}
          <Route path="/" element={<Layout />} />
          {/* <Route index element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
