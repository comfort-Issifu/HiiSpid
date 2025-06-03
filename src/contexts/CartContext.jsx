import { createContext, useContext, useState, useEffect } from "react";
import { getMenus } from "../services/apiCart";
import toast from "react-hot-toast";

const CartContext = createContext(undefined);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("HiiSpid-cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("HiiSpid-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  useEffect(function () {
    async function getAllMenus() {
      try {
        setIsLoading(true);

        const data = await getMenus();
        setMenus(data);
      } catch {
        toast.error("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    getAllMenus();
  }, []);

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prev.filter((cartItem) => cartItem.id !== itemId);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        menus,
        isLoading,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

function useMenus() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("MenuContent was used outside of the MenuProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCart, useMenus };
