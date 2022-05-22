import React, { useState } from "react";
import "./Register.css";
import { auth } from "../../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Register() {
  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [showHome, setshowHome] = useState(false);

  if (showHome) {
    return (
      <Navigate
        to={{
          pathname: "/",
        }}
      />
    );
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        setregisterEmail("");
        setregisterPassword("");

        const user = userCredential.user;
        // alert(user)
        console.log(user);
        toast.success("User has been Register", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setshowHome(true)
        // ...
      })
      .catch((error) => {
        // alert(error.message);
        // console.log(error.message);
        // ..
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <div className="login-form">
        <div className="d-flex justify-content-center align-items-center min-vh-100 ">
          <div className="card loginCard">
            <div className="card-body">
              <h5 className="card-title text-uppercase text-center mt-4 fw-bold fs-3 opacity-50">
                CREATE AN ACCOUNT
              </h5>
              <form className="mt-5" onSubmit={formSubmitHandler}>
                <input
                  type="email"
                  className="form-control my-4"
                  placeholder="Your Email"
                  value={registerEmail}
                  onChange={(e) => setregisterEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control my-4"
                  placeholder="Password"
                  value={registerPassword}
                  onChange={(e) => setregisterPassword(e.target.value)}
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
