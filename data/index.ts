import { Product, Collection, BlogPost } from "../types";

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Floral Summer Dress",
    description:
      "A beautiful floral print dress perfect for summer occasions. Made with breathable cotton fabric.",
    price: 89.99,
    originalPrice: 120.0,
    images: ["/images/products/dress1-1.jpg", "/images/products/dress1-2.jpg"],
    category: "Dresses",
    subcategory: "Summer Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "Yellow"],
    inStock: true,
    rating: 4.5,
    reviewCount: 24,
    isNew: true,
    isBestseller: true,
    tags: ["floral", "summer", "casual", "cotton"],
  },
  {
    id: "2",
    name: "Elegant Party Top",
    description:
      "Sparkly sequined top perfect for parties and special occasions.",
    price: 65.99,
    images: ["/images/products/top1-1.jpg", "/images/products/top1-2.jpg"],
    category: "Tops",
    subcategory: "Party Tops",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Gold", "Silver", "Rose Gold"],
    inStock: true,
    rating: 4.8,
    reviewCount: 18,
    isNew: false,
    isBestseller: true,
    tags: ["sequin", "party", "elegant", "sparkly"],
  },
  {
    id: "3",
    name: "Pleated Mini Skirt",
    description:
      "Classic pleated mini skirt that pairs well with any top. Available in multiple colors.",
    price: 45.99,
    images: ["/images/products/skirt1-1.jpg", "/images/products/skirt1-2.jpg"],
    category: "Skirts",
    subcategory: "Mini Skirts",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Burgundy", "Gray"],
    inStock: true,
    rating: 4.3,
    reviewCount: 31,
    isNew: false,
    isBestseller: true,
    tags: ["pleated", "mini", "classic", "versatile"],
  },
  {
    id: "4",
    name: "Statement Earrings",
    description:
      "Bold statement earrings to complete any outfit. Lightweight and comfortable.",
    price: 24.99,
    images: ["/images/products/earrings1-1.jpg"],
    category: "Accessories",
    subcategory: "Jewelry",
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
    inStock: true,
    rating: 4.6,
    reviewCount: 12,
    isNew: true,
    isBestseller: true,
    tags: ["statement", "earrings", "jewelry", "bold"],
  },
];

export const collections: Collection[] = [
  {
    id: "1",
    name: "Party Wear",
    description: "Glamorous pieces perfect for your next celebration",
    image: "/images/collections/party-wear.jpg",
    products: sampleProducts.filter((p) => p.tags.includes("party")),
    theme: "Glamorous & Sparkly",
  },
  {
    id: "2",
    name: "Casual Chic",
    description:
      "Effortless everyday styles that keep you comfortable and stylish",
    image: "/images/collections/casual-chic.jpg",
    products: sampleProducts.filter((p) => p.tags.includes("casual")),
    theme: "Relaxed & Comfortable",
  },
  {
    id: "3",
    name: "College Looks",
    description: "Trendy and affordable pieces perfect for campus life",
    image: "/images/collections/college-looks.jpg",
    products: sampleProducts.filter((p) => p.price < 70),
    theme: "Young & Trendy",
  },
  {
    id: "4",
    name: "Festive Collection",
    description: "Special occasion wear for festivals and celebrations",
    image: "/images/collections/festive.jpg",
    products: sampleProducts.filter((p) => p.tags.includes("elegant")),
    theme: "Traditional & Modern",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Summer Styling Tips: How to Stay Cool and Chic",
    excerpt:
      "Discover the best ways to style your summer wardrobe with lightweight fabrics and trendy pieces.",
    content:
      "Summer fashion is all about staying cool while looking effortlessly chic...",
    author: "Sarah Johnson",
    publishedAt: new Date("2024-06-15"),
    featuredImage: "/images/blog/summer-styling.jpg",
    tags: ["summer", "styling", "tips", "fashion"],
    readTime: 5,
  },
  {
    id: "2",
    title: "College Fashion on a Budget: Looking Great for Less",
    excerpt:
      "Learn how to build a stylish college wardrobe without breaking the bank.",
    content:
      "College life doesnt mean you have to sacrifice style for savings...",
    author: "Emma Davis",
    publishedAt: new Date("2024-08-20"),
    featuredImage: "/images/blog/college-budget.jpg",
    tags: ["college", "budget", "fashion", "affordable"],
    readTime: 7,
  },
];

export const categories = [
  { name: "Dresses", count: 45, image: "/images/categories/dresses.jpg" },
  { name: "Tops", count: 32, image: "/images/categories/tops.jpg" },
  { name: "Skirts", count: 28, image: "/images/categories/skirts.jpg" },
  {
    name: "Accessories",
    count: 19,
    image: "/images/categories/accessories.jpg",
  },
];

export const filterOptions = {
  categories: ["Dresses", "Tops", "Skirts", "Accessories"],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Black", "White", "Pink", "Blue", "Navy", "Gray", "Gold", "Silver"],
  priceRange: { min: 0, max: 200 },
};

export const sortOptions = [
  { value: "popularity", label: "Most Popular" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];
