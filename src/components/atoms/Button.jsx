import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className,
  disabled,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-blue text-white hover:scale-105 hover:shadow-lg shadow-blue-500/25 glow-blue",
    secondary: "bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white hover:scale-105",
    ghost: "bg-transparent text-white hover:bg-white/10 hover:scale-105",
    outline: "border border-gray-600 text-white hover:bg-white/5 hover:border-accent-blue"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  return (
    <button
      ref={ref}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;