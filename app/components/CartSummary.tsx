import type { CartItem } from "~/lib/types";

interface CartSummaryProps {
  items: CartItem[];
}

export function CartSummary({ items }: CartSummaryProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-primary mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-primary">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-primary/70">
          <span>Delivery</span>
          <span>Free</span>
        </div>
      </div>
      <div className="border-t border-neutral-surface pt-4">
        <div className="flex justify-between text-lg font-bold text-primary">
          <span>Total</span>
          <span className="text-accent">${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

