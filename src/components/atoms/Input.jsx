import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Input = forwardRef(({ 
  type = "text", 
  className,
  error,
  ...props 
}, ref) => {
  const baseClasses = "w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300";
  
  const errorClasses = error 
    ? "border-red-500 focus:ring-red-500/50" 
    : "border-gray-600 focus:ring-accent-blue/50 focus:border-accent-blue";

  return (
    <input
      ref={ref}
      type={type}
      className={cn(baseClasses, errorClasses, className)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;