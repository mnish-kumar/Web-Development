import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import UserProfile from "../pages/user/UserProfile";
import PageNotFound from "../PageNotFound";
import AuthWrapper from "./AuthWrapper";
import Cart from "../pages/Cart";

const MainRoutes = () => {
  return (
    <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Product />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Protected Routes */}
    <Route
      path="/admin/create-product"
      element={
        <AuthWrapper>
          <CreateProduct />
        </AuthWrapper>
      }
    />
    <Route
      path="/admin/user-profile"
      element={
        <AuthWrapper>
          <UserProfile />
        </AuthWrapper>
      }
    />
    <Route
      path="/product/:id"
      element={
        <AuthWrapper>
          <ProductDetails />
        </AuthWrapper>
      }
    />

    <Route
      path="/cart"
      element={
        <AuthWrapper>
          <Cart />
        </AuthWrapper>
      }
    />

    <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;