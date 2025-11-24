import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncDeleteUserProfile, asyncLogOutUser, asyncUpdateUserProfile } from "../../store/actions/userAction";

const UserProfile = () => {
  const { userReducer: { users } } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // Update default values when user data arrives
  useEffect(() => {
    if (users) {
      reset({
        username: users.username || "",
        email: users.email || "",
        password: users.password || "",
      });
    }
  }, [users, reset]);

  const updateUserProfile = (user) => {
    if (!users?.id) return;
    dispatch(asyncUpdateUserProfile(users.id, user));
  };

  const DeleteUserHandler = () => {
    dispatch(asyncDeleteUserProfile(users.id));
    navigate("/login");
  };

  const LogOutUser = () => {
    dispatch(asyncLogOutUser());
    navigate("/login");
  }

  const baseInputClass = "w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2";
  const errorInputClass = "border-red-500 focus:ring-red-500";
  const normalInputClass = "border-gray-300 focus:ring-amber-500";

  return users ? (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Update User Profile
      </h2>

      <form onSubmit={handleSubmit(updateUserProfile)} noValidate>
        {/* Username Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register("username", { required: "Username is required" })}
            className={`${baseInputClass} ${
              errors.username ? errorInputClass : normalInputClass
            }`}
            disabled={isSubmitting}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address",
              },
            })}
            className={`${baseInputClass} ${
              errors.email ? errorInputClass : normalInputClass
            }`}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            className={`${baseInputClass} ${
              errors.password ? errorInputClass : normalInputClass
            }`}
            placeholder="Enter new password"
            disabled={isSubmitting}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Update Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Updating Profile..." : "Update Profile"}
        </button>

        <button
          type="button"
          onClick={LogOutUser}
          className="mt-3 w-full bg-gray-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Log Out
        </button>

        {/* Delete Button */}
        <button
          type="button"
          onClick={DeleteUserHandler}
          className="mt-3 w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Delete Account
        </button>
      </form>
    </div>
  ) : (
    "Loading user data..."
  );
};

export default UserProfile;