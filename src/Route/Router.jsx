import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Location from "../pages/Location";
import Feedback from "../pages/Feedback";
import Order from "../pages/Order";
import PageNotFound from "../pages/PageNotFound";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Order />} />
        <Route path="locations" element={<Location />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
