import { Link } from "react-router";
import { href } from "react-router";
import type { Product } from "~/lib/types";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Link
      to={href("/product/:id", { id: product.id })}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative"
    >
      <div className="relative aspect-square overflow-hidden bg-neutral-bg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200 z-10"
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            className={`w-5 h-5 transition-colors ${
              isFavorited ? "text-red-500 fill-current" : "text-primary"
            }`}
            fill={isFavorited ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-primary mb-2 text-sm sm:text-base line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="text-base sm:text-lg font-semibold text-accent">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
