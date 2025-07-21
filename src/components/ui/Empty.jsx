import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";

const Empty = ({ 
  title = "No Trends Found", 
  description = "We're still scanning the digital horizon for emerging trends.",
  actionText = "Start Trending",
  onAction 
}) => {
  return (
    <Card variant="glass" className="p-12 text-center max-w-lg mx-auto">
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-blue rounded-full flex items-center justify-center wave-animation">
              <ApperIcon name="TrendingUp" className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -inset-4 bg-gradient-blue rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="text-center">
              <ApperIcon name="Search" className="w-6 h-6 text-accent-blue mx-auto mb-2" />
              <p className="text-xs text-gray-500">Discover</p>
            </div>
            <div className="text-center">
              <ApperIcon name="Sparkles" className="w-6 h-6 text-accent-purple mx-auto mb-2" />
              <p className="text-xs text-gray-500">Create</p>
            </div>
            <div className="text-center">
              <ApperIcon name="Share2" className="w-6 h-6 text-accent-green mx-auto mb-2" />
              <p className="text-xs text-gray-500">Publish</p>
            </div>
          </div>
          
          {onAction && (
            <Button onClick={onAction} variant="primary" size="lg" className="w-full">
              <ApperIcon name="Zap" className="w-5 h-5 mr-2" />
              {actionText}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Empty;