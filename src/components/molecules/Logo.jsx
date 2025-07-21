import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <ApperIcon 
          name="TrendingUp" 
          className="w-8 h-8 text-accent-blue wave-animation" 
        />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
      </div>
      <span className="text-xl font-bold gradient-text">
        SocialTrends
      </span>
    </div>
  );
};

export default Logo;