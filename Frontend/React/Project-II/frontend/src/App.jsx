import { useEffect } from "react";
import {asyncCurrentUser} from './store/UserAction'
import { useDispatch } from "react-redux";
import MainRoutes from "./routes/MainRoutes"
import Nav from "./components/Nav";

const App = () => {

  // const data = useSelector((state) => state);
  // console.log(data);


  // Actions se dat aaya
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, [])
  

  return (
    <div className="p-4 bg-[#FEF3E2]">
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App