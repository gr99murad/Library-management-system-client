import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginLottieData from "../assets/lottie/login.json";
import AuthContext from "../context/AuthContext/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = e.target.elements;

    try {
      const result = await signInUser(email.value, password.value);
      Swal.fire("success", "Login successful!", "success");
      navigate("/");
    } catch (error) {
      setError(error.message);
      Swal.fire("error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      Swal.fire("success", "Google Login successful!", "success");
      navigate("/");
    } catch (error) {
      setError(error.message);
      Swal.fire("error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="hero bg-primary py-24 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={loginLottieData}></Lottie>
          </div>
          <div className="card bg-[#e2d8d8] w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className=" ml-8 mt-4 text-5xl font-bold">Sign In Now!</h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-accent" disabled={loading}>
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-[#bea7a7] text-text"
                disabled={loading}
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    <FaGoogle className="text-xl"></FaGoogle>
                    <span>Sign in with Google</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
