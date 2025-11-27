import type { Route } from "./+types/products";
import { ProductGrid } from "~/components/ProductGrid";
import { mockProducts } from "~/lib/products";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const products = category
    ? mockProducts.filter((p) => p.category === category)
    : mockProducts;
  return { products };
}

export default function Products({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8">
          All Products
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

