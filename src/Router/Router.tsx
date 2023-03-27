import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import JoinPage from "../Pages/JoinPage/JoinPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
