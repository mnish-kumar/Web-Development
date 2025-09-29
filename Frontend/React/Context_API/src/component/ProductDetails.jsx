import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
    const navigate = useNavigate()
    const params = useParams()

  return (
    <div>
        <h1 className="font-thin text-5xl mb-5">{params.name}</h1>
        <h2 className="font-thin text-2xl mb-3">Product Details...</h2>

        <button onClick={() => navigate("/product")} className="px-3 py-1.5 bg-teal-400 rounded cursor-pointer text-sm">Go back</button>
    </div>
  )
}

export default ProductDetails