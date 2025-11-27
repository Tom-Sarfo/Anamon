import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products", "routes/products.tsx"),
  route("product/:id", "routes/product.$id.tsx"),
  route("cart", "routes/cart.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("order-success", "routes/order-success.tsx"),
  route("api/products", "routes/api.products.ts"),
] satisfies RouteConfig;
