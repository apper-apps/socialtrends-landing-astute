import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

const NavigationLink = ({ 
  to, 
  children, 
  className = "", 
  external = false,
  onClick 
}) => {
  const baseClasses = "text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 relative group";
  
  if (external) {
    return (
      <a
        href={to}
        className={cn(baseClasses, className)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue transition-all duration-300 group-hover:w-full"></span>
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          baseClasses,
          isActive ? "text-accent-blue" : "",
          className
        )
      }
      onClick={onClick}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue transition-all duration-300 group-hover:w-full"></span>
    </NavLink>
  );
};

export default NavigationLink;