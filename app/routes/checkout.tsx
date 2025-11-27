import type { Route } from "./+types/checkout";
import { redirect, href, Form } from "react-router";
import { getCart, getCheckoutItem, getCheckoutDraft, saveCheckoutDraft, clearCart, clearCheckoutData } from "~/lib/storage";
import { Input } from "~/components/Input";
import { Button } from "~/components/Button";
import { useState, useEffect } from "react";

export async function loader() {
  const cart = getCart();
  const checkoutItem = getCheckoutItem();
  
  if (cart.length === 0 && !checkoutItem) {
    return redirect(href("/cart"));
  }
  
  const draft = getCheckoutDraft();
  return { cart, checkoutItem, draft };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const location = formData.get("location")?.toString() || "";

  if (!name || !email || !phone || !location) {
    return { error: "All fields are required" };
  }

  clearCart();
  clearCheckoutData();
  
  return redirect(href("/order-success"));
}

export default function Checkout({ loaderData, actionData }: Route.ComponentProps) {
  const { cart, checkoutItem, draft } = loaderData;
  const [formData, setFormData] = useState({
    name: draft.name,
    email: draft.email,
    phone: draft.phone,
    location: draft.location,
  });

  useEffect(() => {
    setFormData({
      name: draft.name,
      email: draft.email,
      phone: draft.phone,
      location: draft.location,
    });
  }, [draft]);

  const handleChange = (field: string, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    saveCheckoutDraft(updated);
  };

  const items = checkoutItem ? [checkoutItem] : cart;
  const total = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-primary mb-4">
              Delivery Information
            </h2>
            {actionData?.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {actionData.error}
              </div>
            )}
            <Form method="post" className="space-y-4">
              <Input
                label="Full Name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <Input
                label="Location"
                name="location"
                type="text"
                required
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
              <Button type="submit" variant="primary" className="w-full">
                Confirm Order
              </Button>
            </Form>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <h2 className="text-xl font-bold text-primary mb-4">
                Order Summary
              </h2>
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-bg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-primary">{item.name}</p>
                      <p className="text-sm text-primary/70">
                        Qty: {item.quantity || 1}
                      </p>
                      <p className="text-accent font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-surface mt-4 pt-4">
                <div className="flex justify-between text-lg font-bold text-primary">
                  <span>Total</span>
                  <span className="text-accent">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="bg-neutral-surface p-4 rounded-lg">
              <p className="text-sm text-primary">
                <strong>Payment on Delivery:</strong> You will pay when you receive your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

