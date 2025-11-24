import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncUpdateUserProfile } from '../store/actions/userAction';
import { useEffect, useState, memo } from 'react';
import axios from '../api/Axiosconfig';
import InfiniteScroll from "react-infinite-scroll-component";


const ProductCard = memo(({ product, onAddToCart }) => {
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

const ProductList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/products?_limit=8&_start=${products.length}`);
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const AddtoCartHandler = (product) => {
    if (!users) return;
    const copyUser = { ...users, cart: [...(users.cart || [])] };
    const productIndex = copyUser.cart.findIndex((prod) => prod?.product?.id === product.id);

    if (productIndex === -1) {
      copyUser.cart.push({ product: product, quantity: 1 });
    } else {
      copyUser.cart[productIndex] = {
        product: product,
        quantity: copyUser.cart[productIndex].quantity + 1,
      };
    }

    dispatch(asyncUpdateUserProfile(copyUser.id, copyUser));
    // navigate('/cart');
  };

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold text-gray-500">
          Loading Products....
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p className='pt-5 text-center text-gray-500'>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={AddtoCartHandler} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;