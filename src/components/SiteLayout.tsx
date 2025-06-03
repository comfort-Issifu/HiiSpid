import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Children } from "react";

function SiteLayout({ children }) {
  return (
    <div className="app-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default SiteLayout;
