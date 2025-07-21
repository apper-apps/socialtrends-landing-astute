import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Badge from "@/components/atoms/Badge";
import Card from "@/components/atoms/Card";

const TrendingCard = ({ trend, index }) => {
  const getPlatformIcon = (platform) => {
    const icons = {
      "TikTok": "Smartphone",
      "Twitter": "Twitter",
      "Instagram": "Instagram",
      "YouTube": "Youtube",
      "Facebook": "Facebook"
    };
    return icons[platform] || "TrendingUp";
  };

  const getPlatformColor = (platform) => {
    const colors = {
      "TikTok": "text-pink-400",
      "Twitter": "text-blue-400",
      "Instagram": "text-purple-400",
      "YouTube": "text-red-400",
      "Facebook": "text-blue-500"
    };
    return colors[platform] || "text-accent-blue";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="float-animation"
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      <Card variant="glass" className="p-4 hover:border-accent-blue/50 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ApperIcon 
              name={getPlatformIcon(trend.platform)} 
              className={`w-5 h-5 ${getPlatformColor(trend.platform)}`} 
            />
            <div>
              <div className="font-medium text-white">{trend.topic}</div>
              <div className="text-xs text-gray-400">{trend.timestamp}</div>
            </div>
          </div>
          <Badge variant="success" size="sm">
            +{trend.growth}%
          </Badge>
        </div>
      </Card>
    </motion.div>
  );
};

export default TrendingCard;