import React from "react";
import Header from "./componants/header/Header";
import { Outlet } from "react-router";
import Footer from "./componants/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
