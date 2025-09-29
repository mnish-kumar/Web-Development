import { Route, Routes } from "react-router-dom"
import About from "../component/About"
import Home from "../component/Home"
import Product from "../component/Product"
import Service from "../component/Service"
import ProductDetails from "../component/ProductDetails"

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetails />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  )
}

export default Mainroutes