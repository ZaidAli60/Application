import React from "react";
import { CartState } from "../../../context/Context";

function SingleProduct({ products }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="card card-margin my-2" style={{ height: "25rem" }}>
          <img
            src={products.image}
            style={{
              margin: "auto",
              display: "block",
              width: "10rem",
              height: "50%",
            }}
            className="py-3 img-fluid"
            alt="prod"
          />
          <div className="card-body text-center ">
            <h5 className="card-title text-uppercase">{products.category}</h5>

            <p>${products.price}</p>
            <div className="d-flex justify-content-center ">
              <button
                className="btn text-white  btn-sm text-uppercase"
                style={{ backgroundColor: "#f57224" }}
                onClick={() => {
                  dispatch({ type: "Add_TO_CART", payload: products });
                }}
              >
                Add To Cart
              </button>

              <button
                className="btn text-white  btn-sm text-uppercase mx-1 bg-danger"
                style={{ backgroundColor: "#f57224" }}
                onClick={() => {
                  dispatch({ type: "REMOVE_CART", payload: products });
                }}
              >
                Remove Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
