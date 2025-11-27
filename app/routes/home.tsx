import type { Route } from "./+types/home";
import { ProductGrid } from "~/components/ProductGrid";
import { mockProducts } from "~/lib/products";

export async function loader() {
  const featuredProducts = mockProducts.slice(0, 8);
  return { products: featuredProducts };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Redefine Your Style
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            An exclusive collection inspired by iconic celebrities and leading luxury brands
          </p>
          <a
            href="#products"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Discover the collection →
          </a>
        </div>
      </section>

      <section id="products" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center">
            Featured Products
          </h2>
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="py-12 px-4 bg-neutral-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Tops", "Bottoms", "Outerwear", "Footwear"].map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-primary">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
