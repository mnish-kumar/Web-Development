import { useEffect, Suspense } from "react";
import {asyncCurrentUser} from './store/actions/userAction'
import { useDispatch, useSelector } from "react-redux";
import MainRoutes from "./routes/MainRoutes"
import Nav from "./components/Nav";

const App = () => {
  
  // Actions se dat aaya
  const dispatch = useDispatch();

  const {users} = useSelector((state) => state.userReducer);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users, dispatch]);

  return (
    <div className="p-1 bg-[#FEF3E2]">
      <Nav/>
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <MainRoutes/>
      </Suspense>
    </div>
  )
}

export default App