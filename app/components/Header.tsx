import { Link, useLocation } from "react-router";
import { href } from "react-router";
import { getCart } from "~/lib/storage";
import { useEffect, useState } from "react";

export function Header() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();
    const interval = setInterval(updateCartCount, 500);
    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={href("/")} className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Anamon</h1>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link
              to={href("/products")}
              className="text-primary hover:text-accent transition-colors"
            >
              Products
            </Link>
            <Link
              to={href("/cart")}
              className="relative text-primary hover:text-accent transition-colors"
            >
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

