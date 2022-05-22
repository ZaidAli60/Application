import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "../../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function Login() {
    const [loginEmail, setloginEmail] = useState("");
    const [loginPassword, setloginPassword] = useState("");



const formSubmitHandler = (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // alert(user.uid);
      setloginEmail("");
      setloginPassword("");
      toast.success("User has been Logged in!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // ...
    })
    .catch((error) => {
      // alert(error.message);
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
    <div className="login-form">
      <div className="d-flex justify-content-center align-items-center min-vh-100 ">
        <div className="card loginCard">
          <div className="card-body">
            <h5 className="card-title text-uppercase text-center mt-4 fw-bold fs-3">
              Login
            </h5>
            <form className="mt-5 text-center" onSubmit={formSubmitHandler}>
              <input
                type="e-mail"
                className="form-control inputField "
                placeholder="Enter Your E-mail"
                value={loginEmail}
                onChange={(e) => setloginEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control my-4"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setloginPassword(e.target.value)}
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
                <Link to="/register">SIGN UP</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
