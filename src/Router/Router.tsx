import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Join from "../Pages/Join/Join";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
