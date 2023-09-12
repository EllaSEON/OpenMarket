import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import SellerHeader from "../Seller/SellerHeader";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <ContentWrap>
        <Outlet />
      </ContentWrap>
      <Footer />
    </>
  );
}

export function SellerLayout() {
  return (
    <>
      <SellerHeader />
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </>
  );
}

export const ContentWrap = styled.div`
  max-width: 1380px;
  min-width: 770px;
  min-height: 800px;
  margin: 0 auto;
  padding-bottom: 100px;
  @media screen and (max-width: 450px) {
    min-width: 300px;
  }
`;
