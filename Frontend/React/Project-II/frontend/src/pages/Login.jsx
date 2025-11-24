import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"; 
import { asyncLoginUser } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';





const Login = () => {
  const {register, reset, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate('/products');
    reset();
  };



  return (
    // 1. Main container to center the form on the page
    <main className="min-h-screen flex items-center justify-center p-4">
      {/* 2. Styled form card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mt-[-30px]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login Here
        </h2>

        <form onSubmit={handleSubmit(LoginHandler)}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              {...register("email")}
              onChange={(elem) => {elem.target.value}}
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
              onChange={(elem) => {elem.target.value}}
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
            Login
          </button>
        </form>



        {/* 4. Styled link at the bottom */}
        <p className="text-center text-gray-600 mt-6">
          Dont't have an account?{' '}
          <Link to="/register" className="text-amber-600 font-medium hover:underline">
            Register Here
          </Link>
        </p>

      </div>
    </main>
  );
};

export default Login;