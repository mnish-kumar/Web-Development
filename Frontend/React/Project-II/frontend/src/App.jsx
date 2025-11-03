import { useEffect } from "react";
import {asyncCurrentUser} from './store/actions/userAction'
import { useDispatch } from "react-redux";
import MainRoutes from "./routes/MainRoutes"
import Nav from "./components/Nav";
import { asyncLoadProducts } from "./store/actions/productAction";

const App = () => {

  // Actions se dat aaya
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, [])
  

  return (
    <div className="p-4 bg-[#FEF3E2]">
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App