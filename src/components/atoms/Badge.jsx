import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Badge = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-blue text-white",
    secondary: "bg-accent-purple/20 text-accent-purple border border-accent-purple/30",
    success: "bg-accent-green/20 text-accent-green border border-accent-green/30",
    outline: "border border-gray-600 text-gray-300 hover:border-accent-blue hover:text-accent-blue"
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };

  return (
    <span
      ref={ref}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;