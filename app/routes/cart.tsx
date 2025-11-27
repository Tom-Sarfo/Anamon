import type { Route } from "./+types/cart";
import { Link, href } from "react-router";
import { getCart } from "~/lib/storage";
import { CartItem } from "~/components/CartItem";
import { CartSummary } from "~/components/CartSummary";
import { Button } from "~/components/Button";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { useState, useEffect } from "react";

export async function loader() {
  const cart = getCart();
  return { cart };
}

export default function Cart() {
  const [cart, setCart] = useState(getCart());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCart(getCart());
  }, []);

  const handleUpdate = () => {
    setCart(getCart());
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-8">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-lg text-primary mb-4">Your cart is empty</p>
            <Link to={href("/products")}>
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${item.size}-${item.color}-${index}`}
                item={item}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
          <div>
            <CartSummary items={cart} />
            <Link to={href("/checkout")} className="block mt-4">
              <Button variant="primary" className="w-full">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

