import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
function Navbar() {
  return (
    <nav className="sticky-top">
      <div className="p-3 text-center bg-white border-bottom ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <a href="#!" className="ms-md-2">
                <img src={logo} height={35} alt="draza Logo" />
              </a>
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
                <a className="text-reset me-3" href="#">
                  <span>
                    <i class="bi bi-cart-plus-fill fs-3"></i>
                  </span>
                  <span class="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                {/* Notification */}

                {/* <div>
                  <button
                    className="btn text-white fw-bold"
                    style={{ backgroundColor: "#f57224", border: "none" }}
                  >
                    LOGIN
                  </button>
                </div> */}

                <Link to="/login" className="btn text-uppercase fw-bold" style={{backgroundColor:""}}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
