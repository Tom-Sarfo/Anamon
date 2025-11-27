import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-secondary text-primary hover:bg-secondary/80 focus:ring-secondary",
    accent: "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

