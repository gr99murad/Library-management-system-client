import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottieData from '../assets/lottie/register.json';
import AuthContext from '../context/AuthContext/AuthContext';
import { Link } from 'react-router-dom';



const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState('');

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        // console.log(email,password);


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if(!passwordRegex.test(password)){
          setError('Password must have an uppercase letter, a lowercase letter, and at least 6 characters');
          return;
        }

        createUser(email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
      
      <Lottie animationData={registerLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className=" ml-8 mt-4 text-5xl font-bold">Register Now!</h1>
      <form onSubmit={handleRegister} className="card-body">


      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className='text-center mt-4'>
        Already have an account? <Link to="/auth/login" className='text-blue-500'>Login</Link>
      </p>
    </div>
  </div>
</div>
    );
};

export default Register;