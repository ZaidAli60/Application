import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Admin/Layout";
import Dashboard from "../Pages/dashboard/Dashboard";
import AddProduct from "../Pages/Add Product/AddProduct"
import NewProduct from "../Pages/New Product/NewProduct"
function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route /> */}
          <Route path="/" element={<Layout />} />
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addproduct" element={< AddProduct />} />
          <Route path="/newproduct" element={< NewProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
