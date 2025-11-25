import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncUpdateUserProfile } from '../store/actions/userAction';
import { useCallback } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductCard } from '../components/ProductTemplate';
import UseInfiniteProducts from '../utils/UseInfiniteProducts';

const ProductList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate();
  const {hasMore, products, fetchProducts} = UseInfiniteProducts();
  

  const AddtoCartHandler = useCallback((product) => {
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
    navigate('/cart');
  }, [users, dispatch, navigate]);

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