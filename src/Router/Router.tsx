import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/Layout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import JoinPage from "../Pages/JoinPage/JoinPage";
import HomePage from "../Pages/HomePage/HomePage";
import CartPage from "../Pages/CartPage/CartPage";
import MyPage from "../Pages/MyPage/MyPage";
import SearchResult from "../Pages/SearchResult/SearchResult";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="search" element={<SearchResult />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
