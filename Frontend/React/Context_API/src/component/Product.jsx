import {useNavigate} from "react-router-dom";

const Product = () => {

  const navigate = useNavigate()

  const navigateHandler = (name) => {
    navigate(`/product/detail/${name}`)
  }


  return (
    <div>
      <h1 className="font-thin text-5xl">Products</h1>
      <h2 className="font-thin text-lg">List of Products</h2>

      <div>
        <h1 className="font-thin text-2xl mt-7">Product 1</h1>
        <button onClick={() => navigateHandler("Product 1")} className="px-2 py-1 bg-teal-400 rounded cursor-pointer text-sm">See details</button>
      </div>

      <div>
        <h1 className="font-thin text-2xl mt-7">Product 2</h1>
        <button onClick={() => navigateHandler("Product 2")} className="px-2 py-1 bg-teal-400 rounded cursor-pointer text-sm">See details</button>
      </div>

      <div>
        <h1 className="font-thin text-2xl mt-7">Product 3</h1>
        <button onClick={() => navigateHandler("Product 3")} className="px-2 py-1 bg-teal-400 rounded cursor-pointer text-sm">See details</button>
      </div>
    </div>
  )
}

export default Product