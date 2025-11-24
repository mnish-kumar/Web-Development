import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncDeleteProduct, asyncUpdateProduct,} from "../../store/actions/productAction";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  const product = products.find((prod) => prod.id.toString() === id);
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm();


  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("image", product.image);
      setValue("price", product.price);
      setValue("description", product.description);
      setValue("category", product.category);
    }
  }, [product, setValue]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UpdateProductHandler = (data) => {
    dispatch(asyncUpdateProduct(product.id, { ...data }));
  };

  const DeleteProductHandler = () => {
    dispatch(asyncDeleteProduct(product.id));
    navigate("/products");
  };

  const baseInputClass = "w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 transition-all duration-200";
  const normalInputClass = "border-gray-300 focus:ring-amber-400";
  const errorInputClass = "border-red-500 focus:ring-red-400";

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold text-gray-500">
          Loading Product...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            Product Preview
          </h2>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover rounded-lg mb-4 border p-4  border-gray-300"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>
          <span className="block text-3xl font-bold text-blue-700 mb-4">
            ${product.price}
          </span>
          <p className="text-gray-700 mt-4">{product.description}</p>
        </div>

        {users && users.isAdmin && (
          <div className="w-full md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Update Product</h2>
            <form onSubmit={handleSubmit(UpdateProductHandler)} noValidate>
              {/* Title Field */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Product Title
                </label>
                <input
                  id="title"
                  {...register("title", {
                    required: "Title is required",
                  })}
                  className={`${baseInputClass} ${
                    errors.title ? errorInputClass : normalInputClass
                  }`}
                  placeholder="e.g., Apple iPhone 15"
                  disabled={isSubmitting}
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
                  type="url"
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
                    valueAsNumber: true,
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
                <textarea
                  id="description"
                  rows="4"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message:
                        "Description must be at least 10 characters long",
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
                  <option value="">Select a category...</option>
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
                {isSubmitting ? "Updating Product..." : "Update Product"}
              </button>

              <button
                type="button"
                onClick={DeleteProductHandler}
                className="mt-3 w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Delete Product
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
