import type { Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "Comfortable cotton t-shirt perfect for everyday wear.",
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    description: "Classic denim jacket with a modern fit.",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
  },
  {
    id: "3",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    description: "Comfortable slim-fit jeans for a modern look.",
    category: "Bottoms",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black"],
  },
  {
    id: "4",
    name: "Knit Sweater",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
    description: "Warm and cozy knit sweater for the colder months.",
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Gray", "Navy"],
  },
  {
    id: "5",
    name: "Cargo Pants",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
    description: "Functional cargo pants with multiple pockets.",
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Black", "Olive"],
  },
  {
    id: "6",
    name: "Hooded Sweatshirt",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    description: "Comfortable hooded sweatshirt for casual wear.",
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
  },
  {
    id: "7",
    name: "Leather Boots",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    description: "Durable leather boots for all seasons.",
    category: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Brown", "Black"],
  },
  {
    id: "8",
    name: "Baseball Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
    description: "Classic baseball cap with adjustable strap.",
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Black", "Navy", "Gray"],
  },
  {
    id: "9",
    name: "Wool Coat",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
    description: "Elegant wool coat for formal occasions.",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Camel"],
  },
  {
    id: "10",
    name: "Canvas Sneakers",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Classic canvas sneakers for everyday comfort.",
    category: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Navy"],
  },
  {
    id: "11",
    name: "Polo Shirt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "Classic polo shirt for a smart casual look.",
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Navy", "Gray"],
  },
  {
    id: "12",
    name: "Chino Shorts",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
    description: "Comfortable chino shorts for warm weather.",
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Navy", "Olive"],
  },
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category) return mockProducts;
  return mockProducts.filter((p) => p.category === category);
}

