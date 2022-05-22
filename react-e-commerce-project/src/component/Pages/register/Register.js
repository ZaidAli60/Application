import React from "react";
import "./Register.css";
function Register() {
  return (
    <>
      <div className="login-form">
        <div className="d-flex justify-content-center align-items-center min-vh-100 ">
          <div className="card loginCard">
            <div className="card-body">
              <h5 className="card-title text-uppercase text-center mt-4 fw-bold fs-3 opacity-50">
                CREATE AN ACCOUNT
              </h5>
              <form className="mt-5">
                <input
                  type="text"
                  className="form-control inputField "
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  className="form-control my-4"
                  placeholder="Your Email"
                />
                <input
                  type="password"
                  className="form-control my-4"
                  placeholder="Password"
                />

                <input
                  type="password"
                  className="form-control my-4"
                  placeholder="Repeat your password"
                />

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label className="form-check-label" for="invalidCheck2">
                      I agree all statements in Terms of service
                    </label>
                  </div>
                </div>

                <div className="mt-5 text-center ">
                  <button
                    type="submit"
                    className="btn btn-primary text-uppercase fw-bold"
                    style={{ backgroundColor: "#f57224", border: "none" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
