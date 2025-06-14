import { Toaster } from "react-hot-toast";
import Router from "./Route/Router";
// import CookieBanner from "./components/CookieBanner";
import { CartProvider } from "./contexts/CartContext";
import { FeedbackProvider } from "./contexts/feedback/Feedback.context";
import { LocationProvider } from "./contexts/location/Location.context";

function App() {
  return (
    <>
      <CartProvider>
        <FeedbackProvider>
          <LocationProvider>

          <Router />
          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "14px",
                maxWidth: "500px",
                padding: "8px 20px",
                backgroundcolor: "with",
                color: "black",
              },
            }}
          />
          </LocationProvider>
        </FeedbackProvider>
      </CartProvider>
      {/* <CookieBanner /> */}
    </>
  );
}

export default App;
