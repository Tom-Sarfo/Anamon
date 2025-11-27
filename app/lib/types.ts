export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

export interface CheckoutDraft {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface CheckoutItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

