import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (
    // Card Container
    <div
      key={product.id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
    >
      {/* Product Image */}
      <div className="relative h-60  w-full p-3">
        <img
          className="h-full w-full rounded object-cover"
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex-grow flex flex-col">
       
        <h3 className="text-lg font-semibold tracking-tight text-gray-900 truncate">
          {product.title}
        </h3>

       
        <p className="mt-2 text-sm text-gray-600 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Price and Add to Cart Button */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors">
            Add to Cart
          </button>
        </div>

        <Link to={`/product/${product.id}`} className=" text-blue-400 hover:underline text-[12px]">
          More Info...
        </Link>
      </div>
    </div>
  );
};

// This is your original component, now renamed to 'ProductList'
const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);

  // This renders the list of ProductCard components
  const renderProducts = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  // Loading state
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold text-gray-500">
          Loading Products....
        </div>
      </div>
    );
  }

  // Main grid container
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderProducts}
      </div>
    </div>
  );
};

export default ProductList;