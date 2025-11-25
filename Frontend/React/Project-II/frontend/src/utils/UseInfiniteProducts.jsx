import { useDispatch } from "react-redux";
import axios from '../api/Axiosconfig';
import { loadLazyProduct } from '../store/reducers/ProductSlice';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const UseInfiniteProducts = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.productReducer);
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
            dispatch(loadLazyProduct(data));
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
  
    return {hasMore, products, fetchProducts}
}

export default UseInfiniteProducts