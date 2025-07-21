import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const FloatingMockup = ({ type, className = "" }) => {
  const mockups = {
    dashboard: (
      <Card variant="floating" className={`p-4 w-80 ${className}`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-white">Trending Now</h4>
            <ApperIcon name="TrendingUp" className="w-5 h-5 text-accent-green" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-sm text-gray-300">#AIArt</span>
              <span className="text-xs text-accent-green">+847%</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-sm text-gray-300">#SustainableTech</span>
              <span className="text-xs text-accent-green">+432%</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-300">#MorningRoutine</span>
              <span className="text-xs text-accent-green">+276%</span>
            </div>
          </div>
        </div>
      </Card>
    ),
    
    social: (
      <Card variant="floating" className={`p-4 w-72 ${className}`}>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-blue rounded-full flex items-center justify-center">
              <ApperIcon name="User" className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">@creator</div>
              <div className="text-xs text-gray-400">2 hours ago</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded p-3">
            <p className="text-sm text-gray-300">
              Just discovered this amazing #AIArt trend! Check out my latest creation 🎨✨
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <ApperIcon name="Heart" className="w-4 h-4" />
              <span>1.2k</span>
            </div>
            <div className="flex items-center space-x-1">
              <ApperIcon name="MessageCircle" className="w-4 h-4" />
              <span>89</span>
            </div>
            <div className="flex items-center space-x-1">
              <ApperIcon name="Share" className="w-4 h-4" />
              <span>34</span>
            </div>
          </div>
        </div>
      </Card>
    ),

    analytics: (
      <Card variant="floating" className={`p-4 w-64 ${className}`}>
        <div className="space-y-3">
          <h4 className="font-semibold text-white">Content Performance</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Reach</span>
              <span className="text-sm font-semibold text-accent-blue">2.4M</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-blue h-2 rounded-full w-3/4"></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">Engagement</span>
              <span className="text-sm font-semibold text-accent-green">12.8%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-green h-2 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      </Card>
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="float-animation"
    >
      {mockups[type]}
    </motion.div>
  );
};

export default FloatingMockup;