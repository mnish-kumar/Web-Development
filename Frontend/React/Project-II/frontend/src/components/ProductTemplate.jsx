import { memo } from "react";
import { Link } from "react-router-dom";


export const ProductCard = memo(({ product, onAddToCart }) => {
  return (
    <div
      key={product.id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
    >
      <div className="relative h-60 w-full p-3">
        <img
          className="h-full w-full rounded object-cover"
          src={product.image}
          alt={product.title}
          loading="lazy" // Lazy load images for optimization
        />
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold tracking-tight text-gray-900 truncate">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
          >
            Add to Cart
          </button>
        </div>
        <Link to={`/product/${product.id}`} className="text-blue-400 hover:underline text-[12px]">
          More Info...
        </Link>
      </div>
    </div>
  );
});