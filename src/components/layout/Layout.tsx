import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import * as S from "./style";

function MainLayout() {
  return (
    <>
      <Navbar />
      <S.ContentWrap>
        <Outlet />
      </S.ContentWrap>
      <Footer />
    </>
  );
}

export default MainLayout;
