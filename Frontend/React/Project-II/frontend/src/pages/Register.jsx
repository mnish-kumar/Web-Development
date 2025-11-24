import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"; 
import { nanoid } from '@reduxjs/toolkit';
import { asyncgetuser } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';




const Register = () => {
  const {register, reset, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(asyncgetuser(user));
    navigate("/login");
    reset();
  };



  return (
    // 1. Main container to center the form on the page
    <main className="min-h-screen flex items-center justify-center p-4">
      {/* 2. Styled form card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {/* Note: I removed 'flex flex-col' and am using margins for spacing */}
        <form onSubmit={handleSubmit(RegisterHandler)}>

          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              {...register("username")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
              type="text"
              placeholder="Choose a username"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200"
              type="password"
              placeholder="Min. 8 characters"
            />
          </div>

          {/* 3. Styled Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-transform transform hover:scale-105 duration-300"
          >
            Register
          </button>
        </form>

        {/* 4. Styled link at the bottom */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-amber-600 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </main>
  );
};

export default Register;