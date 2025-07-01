import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "../components/Spinner";

const Home = lazy(() => import("../pages/Home"));
const Location = lazy(() => import("../pages/Location"));
const Terms = lazy(() => import("../pages/Terms"));
const Order = lazy(() => import("../pages/Order"));
const Privacy = lazy(() => import("../pages/Privacy"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Menu = lazy(() => import("../pages/Menu"));
const Feedback = lazy(() => import("../pages/Feedback"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<Order />} />
          <Route path="/locations/:id" element={<Location />} />
          <Route path="locations" element={<Location />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
