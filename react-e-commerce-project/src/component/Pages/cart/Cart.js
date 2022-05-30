import React, { useState, useEffect } from "react";
import { CartState } from "../../../context/Context";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, settotal] = useState();
  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <>
      <div className="text-center">
        <h1 className="text-uppercase my-4">Products</h1>
        <h4 className="text-uppercase my-4 fw-bold text-primary">
          Total:${total}
        </h4>
        <div className="container-fluid ">
          {cart.map((item) => {
            return (
              <ol class="list-group my-3">
                <li class="list-group-item  align-items-start">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <img
                      src={item.image}
                      width="100"
                      height="100"
                      alt="image"
                    />
                    <p
                      className="text-uppercase fw-bold align-items-center"
                      style={{ color: "#f57224" }}
                    >
                      {item.category}
                    </p>
                    <h5>${item.price}</h5>

                    <div>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                        <option value="3">4</option>
                      </select>
                    </div>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        dispatch({ type: "REMOVE_CART", payload: item });
                      }}
                    >
                      Remove Cart
                    </button>
                  </div>
                </li>
              </ol>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
