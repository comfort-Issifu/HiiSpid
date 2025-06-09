import { useState, useEffect } from "react";

import { Minus, Plus } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { Card, CardContent } from "../components/Card";
import { useCart, useMenus } from "../contexts/CartContext";
import { Button } from "../components/Button";
import AppLayout from "../components/AppLayout";

function Menu() {
  const { menus } = useMenus();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [searchParams] = useSearchParams();
  const { cart, addToCart, removeFromCart, getTotalItems, getTotalPrice } =
    useCart();
  const menuItems = menus;
  const menuCategories = [
    "All",
    ...new Set(menus.map((menu) => menu.category)),
  ];

  // Handle search and highlight from URL params
  useEffect(() => {
    const searchQuery = searchParams.get("search");
    const highlightId = searchParams.get("highlight");

    if (searchQuery) {
      // Filter by search query
      setSelectedCategory("All");
    }

    if (highlightId) {
      setHighlightedItem(Number(highlightId));
      // Scroll to highlighted item after a short delay
      setTimeout(() => {
        const element = document.getElementById(`item-${highlightId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [searchParams]);

  const getFilteredItems = () => {
    let filtered =
      selectedCategory === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === selectedCategory);

    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredItems = getFilteredItems();

  const getCartItemQuantity = (itemId) => {
    const cartItem = cart.find((item) => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <AppLayout>
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
            <p className="text-lg text-gray-600">
              Discover our carefully crafted dishes made with the finest
              ingredients
            </p>
            {searchParams.get("search") && (
              <p className="text-amber-600 mt-2">
                Showing results for: "{searchParams.get("search")}"
              </p>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Menu Content */}
            <div className="flex-1">
              {/* Category Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {menuCategories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-amber-600 hover:bg-amber-700 "
                          : ""
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Menu Items */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    id={`item-${item.id}`}
                    className={`overflow-hidden hover:shadow-lg transition-all ${
                      highlightedItem === item.id
                        ? "ring-2 ring-amber-500 shadow-lg"
                        : ""
                    }`}
                  >
                    <div className="flex">
                      <div className="w-32  flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="flex-1 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          {/* <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{item.rating}</span>
                          </div> */}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-amber-600">
                            GH¢ {item.price}
                          </span>
                          <div className="flex items-center gap-2">
                            {getCartItemQuantity(item.id) > 0 && (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Minus className="h-4 w-4 bg-white" />
                                </Button>
                                <span className="w-8 text-center">
                                  {getCartItemQuantity(item.id)}
                                </span>
                              </>
                            )}
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(item)}
                              className="bg-amber-600 hover:bg-amber-700"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No items found matching your search.
                  </p>
                </div>
              )}
            </div>

            {/* Cart Sidebar */}
            {getTotalItems() > 0 && (
              <div className="lg:w-80">
                <Card className="sticky top-4">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Your Order ({getTotalItems()} items)
                    </h3>
                    <div className="space-y-3 mb-4">
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
                              GH¢ {item.price} each
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
                              onClick={() =>
                                handleAddToCart(
                                  menuItems.find((mi) => mi.id === item.id)
                                )
                              }
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
                          GH¢ {getTotalPrice().toFixed(2)}
                        </span>
                      </div>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        Proceed to Checkout
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
    </AppLayout>
  );
}

export default Menu;
