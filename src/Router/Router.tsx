import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout, { SellerLayout } from "../components/layout/Layout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import JoinPage from "../Pages/JoinPage/JoinPage";
import HomePage from "../Pages/HomePage/HomePage";
import CartPage from "../Pages/CartPage/CartPage";
// import MyPage from "../Pages/MyPage/MyPage";
import SearchResultPage from "../Pages/SearchResultPage/SearchResultPage";
import ProductDetailPage from "../Pages/ProductDetailPage/ProductDetailPage";
import NotFound from "../Pages/NotFound/NotFound";
import SellerAdminPage from "../Pages/SellerAdminPage/SellerAdminPage";
import SellerRegisterPage from "../Pages/SellerRegisterPage/SellerRegisterPage";
import withAuth from "./withAuth";

function Router() {
  const ProtectedCartPage = withAuth(CartPage);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ProtectedCartPage />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
        </Route>
        <Route element={<SellerLayout />}>
          <Route path="/admin" element={<SellerAdminPage />} />
          <Route path="/register" element={<SellerRegisterPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
