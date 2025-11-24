import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const PageNotFound = lazy(() => import("../PageNotFound"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const Cart = lazy(() => import("../pages/Cart"));


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