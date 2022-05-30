import React from "react";
import Product from "../landingPage/Product/Product";
import NewProduct from "./NewProduct";
import Slider from "./Slider";

function Home() {
  return (
    <>
      <Slider />
      <Product />
      <NewProduct />
    </>
  );
}

export default Home;
