import { Heading } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { Children } from "react";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
