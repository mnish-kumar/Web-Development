/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { asyncGetProducts } from './store/userAction'
import { useDispatch } from "react-redux";



const App = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(asyncGetProducts());
  }, [])


  return (

    <div className="text-4xl">App
  </div>
  )
}

export default App