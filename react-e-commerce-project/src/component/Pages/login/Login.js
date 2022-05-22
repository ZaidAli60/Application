import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login-form">
      <div className="d-flex justify-content-center align-items-center min-vh-100 ">
        <div className="card loginCard">
          <div className="card-body">
            <h5 className="card-title text-uppercase text-center mt-4 fw-bold fs-3">
              Login
            </h5>
            <form className="mt-5 text-center">
              <input
                type="text"
                className="form-control inputField "
                placeholder="Username"
              />

              <input
                type="password"
                className="form-control my-4"
                placeholder="Password"
              />
              <div>
                <a href="#">Forget Password</a>
              </div>
              <div className="mt-5">
                <button className="btn text-uppercase loginBtn text-white fw-bold">
                  Login
                </button>
              </div>
              <div className="mt-5 mb-5 d-flex justify-content-evenly">
                <button className="btn btn-primary">
                  {/* <ImFacebook className="fs-5" /> */}
                </button>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#dd4b39", border: "none" }}
                >
                  {/* <AiOutlineGoogle className="fs-5" /> */}
                </button>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#1da1f2", border: "none" }}
                >
                  {/* <BsTwitter className="fs-5" /> */}
                </button>
              </div>
              <div>
                <a href="#">SIGN UP</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;