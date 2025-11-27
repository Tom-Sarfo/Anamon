import type { CartItem, CheckoutDraft, CheckoutItem } from "./types";

const CART_KEY = "anamon_cart";
const CHECKOUT_DRAFT_KEY = "anamon_checkout_draft";
const CHECKOUT_ITEM_KEY = "anamon_checkout_item";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(item: Omit<CartItem, "quantity"> & { quantity?: number }): void {
  if (typeof window === "undefined") return;
  const cart = getCart();
  const existingItem = cart.find((i) => i.id === item.id && i.size === item.size && i.color === item.color);
  
  if (existingItem) {
    existingItem.quantity += item.quantity || 1;
  } else {
    cart.push({ ...item, quantity: item.quantity || 1 });
  }
  
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function removeFromCart(id: string, size?: string, color?: string): void {
  if (typeof window === "undefined") return;
  const cart = getCart();
  const filtered = cart.filter(
    (item) => !(item.id === id && item.size === size && item.color === color)
  );
  localStorage.setItem(CART_KEY, JSON.stringify(filtered));
}

export function updateCartItem(id: string, quantity: number, size?: string, color?: string): void {
  if (typeof window === "undefined") return;
  const cart = getCart();
  const item = cart.find(
    (i) => i.id === id && i.size === size && i.color === color
  );
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(id, size, color);
    } else {
      item.quantity = quantity;
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  }
}

export function clearCart(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CART_KEY);
}

export function getCheckoutDraft(): CheckoutDraft {
  if (typeof window === "undefined") {
    return { name: "", email: "", phone: "", location: "" };
  }
  const draft = localStorage.getItem(CHECKOUT_DRAFT_KEY);
  return draft ? JSON.parse(draft) : { name: "", email: "", phone: "", location: "" };
}

export function saveCheckoutDraft(data: Partial<CheckoutDraft>): void {
  if (typeof window === "undefined") return;
  const current = getCheckoutDraft();
  const updated = { ...current, ...data };
  localStorage.setItem(CHECKOUT_DRAFT_KEY, JSON.stringify(updated));
}

export function getCheckoutItem(): CheckoutItem | null {
  if (typeof window === "undefined") return null;
  const item = localStorage.getItem(CHECKOUT_ITEM_KEY);
  return item ? JSON.parse(item) : null;
}

export function setCheckoutItem(item: CheckoutItem): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CHECKOUT_ITEM_KEY, JSON.stringify(item));
}

export function clearCheckoutData(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CHECKOUT_DRAFT_KEY);
  localStorage.removeItem(CHECKOUT_ITEM_KEY);
}

