import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Phone,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Card, CardContent } from "./Card";
import { useCart } from "../contexts/CartContext";

import Navigation from "./Navigation";
const menuItems = [
  // ... (same menuItems list you provided)
];

<Navigation />;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { cart, addToCart, removeFromCart, getTotalItems, getTotalPrice } =
    useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = menuItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleSearchResultClick = (itemId) => {
    navigate(`/menu?highlight=${itemId}`);
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <div className="text-2xl font-bold text-amber-600">HiiSpid</div>
          </NavLink>

          {/* Desktop Navigation */}
          <Navigation isMobile={false} pathname={pathname} />

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <ShoppingCart className="h-4 w-4" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>

              {/* Cart Dropdown */}
              {cartOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 z-50">
                  <Card className="shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold">
                          Your Cart ({getTotalItems()} items)
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setCartOpen(false)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {cart.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">
                          Your cart is empty
                        </p>
                      ) : (
                        <>
                          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                            {cart.map((item) => (
                              <div
                                key={item.id}
                                className="flex justify-between items-center"
                              >
                                <div className="flex-1">
                                  <div className="font-medium text-sm">
                                    {item.name}
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    ${item.price.toFixed(2)} each
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => removeFromCart(item.id)}
                                    className="h-6 w-6 p-0"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-6 text-center text-sm">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    size="sm"
                                    onClick={() => addToCart(item)}
                                    className="h-6 w-6 p-0 bg-amber-600 hover:bg-amber-700"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="border-t pt-4">
                            <div className="flex justify-between items-center mb-4">
                              <span className="font-semibold">Total:</span>
                              <span className="font-bold text-lg text-amber-600">
                                ${getTotalPrice().toFixed(2)}
                              </span>
                            </div>
                            <Button
                              asChild
                              className="w-full bg-amber-600 hover:bg-amber-700"
                            >
                              <NavLink
                                to="/order"
                                onClick={() => setCartOpen(false)}
                              >
                                Proceed to Checkout
                              </NavLink>
                            </Button>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              (555) 123-4567
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search menu items, locations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute left-4 right-4 mt-2 bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                {searchResults.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSearchResultClick(item.id)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      {item.category} • ${item.price}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-2">
            <Navigation
              isMobile={true}
              pathname={pathname}
              onItemClick={() => setMobileMenuOpen(false)}
            />
            <div className="border-t pt-2 mt-2">
              <div className="flex items-center justify-around py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
