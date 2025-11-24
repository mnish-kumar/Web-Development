import { useEffect } from "react";
import {asyncCurrentUser} from './store/actions/userAction'
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes"
import Nav from "./components/Nav";
import { asyncLoadProducts } from "./store/actions/productAction";

const App = () => {

  // Actions se dat aaya
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.userReducer);
  const {products} = useSelector((state) => state.productReducer);


  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
  }, [user]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products])
  

  return (
    <div className="p-1 bg-[#FEF3E2]">
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App