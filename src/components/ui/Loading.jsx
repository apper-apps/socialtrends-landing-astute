import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Loading = ({ type = "default" }) => {
  if (type === "features") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass rounded-xl p-8 animate-pulse">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
              <div className="space-y-4 w-full">
                <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
                  <div className="h-4 bg-gray-700 rounded w-4/6 mx-auto"></div>
                </div>
              </div>
              <div className="w-full h-20 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "testimonials") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass rounded-xl p-6 animate-pulse">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-24"></div>
                  <div className="h-3 bg-gray-700 rounded w-32"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="relative">
        <ApperIcon 
          name="Loader2" 
          className="w-12 h-12 text-accent-blue animate-spin" 
        />
        <div className="absolute inset-0 w-12 h-12 border-2 border-accent-blue/20 rounded-full animate-pulse"></div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-2">Loading</h3>
        <p className="text-gray-400">Discovering the latest trends...</p>
      </div>
    </div>
  );
};

export default Loading;