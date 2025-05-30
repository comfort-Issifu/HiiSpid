import Router from "./Route/Router"
import {CartProvider} from "./contexts/CartContext"

function App() {
  return (
    <>
    <CartProvider>
    <Router/>
    </CartProvider>
  

    </>
  );
}

export default App;
