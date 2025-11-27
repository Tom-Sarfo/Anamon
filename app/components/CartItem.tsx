import type { CartItem as CartItemType } from "~/lib/types";
import { removeFromCart, updateCartItem } from "~/lib/storage";
import { Button } from "./Button";

interface CartItemProps {
  item: CartItemType;
  onUpdate: () => void;
}

export function CartItem({ item, onUpdate }: CartItemProps) {
  const handleQuantityChange = (newQuantity: number) => {
    updateCartItem(item.id, newQuantity, item.size, item.color);
    onUpdate();
  };

  const handleRemove = () => {
    removeFromCart(item.id, item.size, item.color);
    onUpdate();
  };

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-bg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-primary">{item.name}</h3>
          {(item.size || item.color) && (
            <p className="text-sm text-primary/70">
              {[item.size, item.color].filter(Boolean).join(" • ")}
            </p>
          )}
          <p className="text-lg font-bold text-accent mt-1">
            ${item.price.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="w-8 h-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              −
            </button>
            <span className="w-8 text-center font-medium">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="w-8 h-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

