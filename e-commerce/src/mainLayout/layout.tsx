import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

// type Props = {}

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
