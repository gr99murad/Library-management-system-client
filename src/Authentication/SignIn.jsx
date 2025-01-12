import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import loginLottieData from '../assets/lottie/login.json';
import AuthContext from '../context/AuthContext/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

        signInUser(email, password)
        .then(result => {
          
          console.log('sign in',result.user);
          navigate('/');
          toast.success('Login successful!');
        })
        .catch(error => {
          setError(error.message)
        })

        
    };

    const handleGoogleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then(result => {
        
        console.log('Google sign in', result.user);
        navigate('/');
        toast.success('Google Login successful!');
      })
      .catch(error => {
        setError(error.message);
      });
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
      
      <Lottie animationData={loginLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className=" ml-8 mt-4 text-5xl font-bold">Sign In  Now!</h1>
      <form onSubmit={handleSignIn} className="card-body">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className='text-center mt-4'>
        <button onClick={handleGoogleSignIn} className='btn btn-secondary'>sign in with Google</button>

      </div>
      <p className='text-center mt-4'>
        Don't have an account? <Link to="/auth/register" className='text-blue-500'>Register</Link>
      </p>
    </div>
  </div>
  
</div>
    );
};

export default SignIn;