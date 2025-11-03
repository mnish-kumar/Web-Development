import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productAction";

const CreateProduct = () => {
  const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    navigate("/products");
  };

  const baseInputClass = "w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 transition-all duration-200";
  const normalInputClass = "border-gray-300 focus:ring-amber-400";
  const errorInputClass = "border-red-500 focus:ring-red-400";

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8"> Create a New Product </h2>

        <form onSubmit={handleSubmit(createProductHandler)} noValidate>
          {/* Title Field */}
          <div className="mb-4">
            {/* (Step 10) Accessibility: 'htmlFor' aur 'id' match hone chahiye */}
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Product Title
            </label>
            <input
              id="title"
              {...register("title", {
                required: "Title is required", // (Step 11) Validation rule
              })}
              className={`${baseInputClass} ${
                errors.title ? errorInputClass : normalInputClass
              }`}
              placeholder="e.g., Apple iPhone 15"
              disabled={isSubmitting} // disable while submitting
            />
          </div>

          {/* Image Field (URL) */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image URL
            </label>
            <input
              id="image"
              type="url" // (Step 14) Input type ko 'url' set karein
              {...register("image", {
                required: "Image URL is required",
                pattern: {
                  value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                  message: "Please enter a valid URL (e.g., https://...)",
                },
              })}
              className={`${baseInputClass} ${
                errors.image ? errorInputClass : normalInputClass
              }`}
              placeholder="https://example.com/image.png"
              disabled={isSubmitting}
            />
          </div>

          {/* Price Field */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true, // (Step 15) Isse data number mein convert ho jayega
                min: {
                  value: 0.01,
                  message: "Price must be greater than 0",
                },
              })}
              className={`${baseInputClass} ${
                errors.price ? errorInputClass : normalInputClass
              }`}
              placeholder="Enter product price"
              disabled={isSubmitting}
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            {/* (Step 16) Description ke liye <textarea> behtar hai */}
            <textarea
              id="description"
              rows="4"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters long",
                },
              })}
              className={`${baseInputClass} ${
                errors.description ? errorInputClass : normalInputClass
              }`}
              placeholder="Enter product description (min. 10 chars)"
              disabled={isSubmitting}
            />
          </div>

          {/* Category Field */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2"
            >
              Category
            </label>
            {/* (Step 17) Category ke liye <select> (dropdown) behtar hai */}
            <select
              id="category"
              {...register("category", {
                required: "Please select a category",
              })}
              className={`${baseInputClass} ${
                errors.category ? errorInputClass : normalInputClass
              }`}
              disabled={isSubmitting}
            >
              <option value="">Select a category...</option>{" "}
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="furniture">Furniture</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating Product..." : "Create Product"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateProduct;
