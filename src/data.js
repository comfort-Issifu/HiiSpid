const featuredDishes = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs and lemon",
    price: 28.99,
    image: "/assets/images/pexels-dami-29748127.jpg?height=200&width=300",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Beef Wellington",
    description: "Classic beef wellington with mushroom duxelles",
    price: 45.99,
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Truffle Pasta",
    description: "Handmade pasta with black truffle and parmesan",
    price: 32.99,
    image: "/assets/images/truffle-pasta.webp?height=200&width=300",
    rating: 4.7,
  },
];

const menuCategories = ["All", "Meal", "Beverages"];

const menuItems = [
  {
    id: 1,
    name: "Bruschetta Trio",
    description:
      "Three varieties of our signature bruschetta with fresh tomatoes, basil, and mozzarella",
    price: 14.99,
    category: "Meal",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.7,
    dietary: ["Vegetarian"],
    spicy: false,
  },
  {
    id: 2,
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, parmesan cheese, croutons, and our house-made Caesar dressing",
    price: 16.99,
    category: "Meal",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.5,
    dietary: ["Vegetarian"],
    spicy: false,
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon with herbs, lemon, and seasonal vegetables",
    price: 28.99,
    category: "Meal",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.8,
    dietary: ["Gluten-Free"],
    spicy: false,
  },
  {
    id: 4,
    name: "Beef Wellington",
    description:
      "Classic beef wellington with mushroom duxelles and red wine reduction",
    price: 45.99,
    category: "Meal",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.9,
    dietary: [],
    spicy: false,
  },
  {
    id: 5,
    name: "Truffle Pasta",
    description:
      "Handmade fettuccine with black truffle, parmesan, and cream sauce",
    price: 32.99,
    category: "Meal",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.7,
    dietary: ["Vegetarian"],
    spicy: false,
  },
  {
    id: 6,
    name: "Spicy Arrabbiata",
    description: "Penne pasta with spicy tomato sauce, garlic, and red peppers",
    price: 22.99,
    category: "Meal",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.6,
    dietary: ["Vegan"],
    spicy: true,
  },
  {
    id: 7,
    name: "Tiramisu",
    description:
      "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
    price: 9.99,
    category: "Meal",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.8,
    dietary: ["Vegetarian"],
    spicy: false,
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 11.99,
    category: "Meal",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.9,
    dietary: ["Vegetarian"],
    spicy: false,
  },
  {
    id: 9,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 4.99,
    category: "Beverages",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.5,
    dietary: ["Vegan", "Gluten-Free"],
    spicy: false,
  },
  {
    id: 10,
    name: "Italian Espresso",
    description: "Rich and bold Italian espresso",
    price: 3.99,
    category: "Beverages",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.8,
    dietary: ["Vegan"],
    spicy: false,
  },
  {
    id: 11,
    name: "House Wine",
    description: "Our signature red wine blend",
    price: 8.99,
    category: "Beverages",
    image: "/assets/images/beef-wellington.webp?height=200&width=300",
    rating: 4.6,
    dietary: ["Vegan"],
    spicy: false,
  },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Order Online", href: "/order" },
  { name: "Locations", href: "/locations" },
  { name: "Feedback", href: "/feedback" },
];

export { featuredDishes, menuCategories, navigation, menuItems };
