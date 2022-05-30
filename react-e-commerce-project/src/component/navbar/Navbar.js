import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";
import logo from "../../Assets/logo.png";
import { CartState } from "../../context/Context";
function Navbar({ currentUser }) {
    const {
      state: { cart },
      dispatch,
    } = CartState();
  return (
    <nav className="sticky-top">
      <div className="p-3 text-center bg-white border-bottom ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <Link to="/" className="ms-md-2">
                <img src={logo} height={35} alt="draza Logo" />
              </Link>
            </div>
            <div className="col-md-4">
              <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                <input
                  autoComplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                />
                <span
                  className="input-group-text border-0 d-none d-lg-flex text-white "
                  style={{ backgroundColor: "#f57224" }}
                >
                  <i class="bi bi-search"></i>
                </span>
              </form>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <div className="d-flex">
                {/* Cart */}
                <Link className="text-reset me-3" to="/cart">
                  <span>
                    <i class="bi bi-cart-plus-fill fs-3"></i>
                  </span>
                  <span class="badge rounded-pill badge-notification bg-danger">
                    {cart.length}
                  </span>
                </Link>
                {/* Notification */}
                <Link
                  to="/admin"
                  className="btn text-white fw-bold text-uppercase mx-1"
                  style={{
                    backgroundColor: "#f57224",
                  }}
                >
                  Admin
                </Link>

                {currentUser ? (
                  <Link
                    to="/login"
                    className="btn text-uppercase text-white fw-bold btn-danger"
                    // style={{ backgroundColor: "#f57224" }}
                    onClick={() => auth.signOut(auth)}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn text-uppercase text-white fw-bold"
                    style={{ backgroundColor: "#f57224" }}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
