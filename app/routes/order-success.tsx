import type { Route } from "./+types/order-success";
import { Link, href } from "react-router";
import { Button } from "~/components/Button";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Thank You!
            </h1>
            <p className="text-lg text-primary/70">
              Your order has been confirmed
            </p>
          </div>

          <div className="bg-neutral-surface rounded-lg p-6 mb-6 text-left">
            <h2 className="font-bold text-primary mb-4">What's Next?</h2>
            <ul className="space-y-2 text-sm text-primary/70">
              <li>• We'll process your order and prepare it for delivery</li>
              <li>• You'll receive a confirmation email shortly</li>
              <li>• Our delivery team will contact you to arrange delivery</li>
              <li>• Payment will be collected when you receive your order</li>
            </ul>
          </div>

          <div className="bg-neutral-surface rounded-lg p-6 mb-6">
            <p className="text-sm text-primary mb-2">
              <strong>Delivery Time:</strong> 2-5 business days
            </p>
            <p className="text-sm text-primary">
              <strong>Payment:</strong> Cash on delivery
            </p>
          </div>

          <Link to={href("/")}>
            <Button variant="primary" className="w-full sm:w-auto">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

