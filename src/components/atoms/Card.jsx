import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  children, 
  variant = "glass", 
  className,
  hover = false,
  ...props 
}, ref) => {
  const baseClasses = "rounded-xl transition-all duration-300";
  
  const variants = {
    glass: "glass border border-white/10",
    solid: "bg-gray-900 border border-gray-700",
    gradient: "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-600",
    floating: "glass border border-white/20 shadow-2xl"
  };

  const hoverClasses = hover ? "hover:scale-105 hover:shadow-2xl hover:border-accent-blue/30" : "";

  return (
    <div
      ref={ref}
      className={cn(
        baseClasses,
        variants[variant],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;