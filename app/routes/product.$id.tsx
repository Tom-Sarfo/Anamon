import type { Route } from "./+types/product.$id";
import { redirect, href, isRouteErrorResponse, useRouteError } from "react-router";
import { getProductById } from "~/lib/products";
import { addToCart, setCheckoutItem } from "~/lib/storage";
import { Button } from "~/components/Button";
import { useState } from "react";

export async function loader({ params }: Route.LoaderArgs) {
  const product = getProductById(params.id);
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }
  return { product };
}

export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const product = getProductById(params.id);

  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }

  const size = formData.get("size")?.toString();
  const color = formData.get("color")?.toString();

  if (intent === "buy-now") {
    setCheckoutItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    return redirect(href("/checkout"));
  }

  if (intent === "add-to-cart") {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
    });
    return redirect(href("/cart"));
  }

  return null;
}

export function ErrorBoundary() {
  const error = useRouteError();
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">
          {isRouteErrorResponse(error) && error.status === 404
            ? "Product Not Found"
            : "Error"}
        </h1>
        <p className="text-primary/70 mb-6">
          {isRouteErrorResponse(error)
            ? "The product you're looking for doesn't exist."
            : error instanceof Error
            ? error.message
            : "Something went wrong"}
        </p>
        <a
          href={href("/products")}
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Browse Products
        </a>
      </div>
    </div>
  );
}

export default function ProductDetails({ loaderData }: Route.ComponentProps) {
  const { product } = loaderData;
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div className="aspect-square overflow-hidden rounded-lg bg-neutral-bg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-primary mb-2">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-accent mb-4">
                ${product.price.toFixed(2)}
              </p>
              {product.description && (
                <p className="text-primary/70 mb-6">{product.description}</p>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-primary mb-2">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedSize === size
                            ? "border-primary bg-primary text-white"
                            : "border-neutral-surface text-primary hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-primary mb-2">
                    Color
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedColor === color
                            ? "border-primary bg-primary text-white"
                            : "border-neutral-surface text-primary hover:border-primary"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-neutral-surface p-4 rounded-lg mb-6">
                <p className="text-sm text-primary">
                  <strong>Payment on Delivery:</strong> Pay when you receive your order
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <form method="post" className="flex-1">
                  <input type="hidden" name="intent" value="add-to-cart" />
                  {selectedSize && (
                    <input type="hidden" name="size" value={selectedSize} />
                  )}
                  {selectedColor && (
                    <input type="hidden" name="color" value={selectedColor} />
                  )}
                  <Button type="submit" variant="outline" className="w-full">
                    Add to Cart
                  </Button>
                </form>
                <form method="post" className="flex-1">
                  <input type="hidden" name="intent" value="buy-now" />
                  <Button type="submit" variant="primary" className="w-full">
                    Buy Now
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
