import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card 
        variant="glass" 
        hover={true}
        className="p-8 h-full group"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ApperIcon 
                name={feature.icon} 
                className="w-8 h-8 text-white" 
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-blue rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
              {feature.headline}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Visual Mockup */}
          <div className="w-full mt-6">
            {feature.visualType === "dashboard" && (
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-3 bg-accent-blue rounded"></div>
                    <div className="w-8 h-3 bg-accent-green rounded"></div>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded">
                    <div className="w-3/4 h-full bg-gradient-blue rounded"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-16 h-2 bg-gray-600 rounded"></div>
                    <div className="w-12 h-2 bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
            )}
            
            {feature.visualType === "content-creation" && (
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <ApperIcon name="Sparkles" className="w-4 h-4 text-accent-purple" />
                    <div className="w-24 h-2 bg-accent-purple rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-2 bg-gray-700 rounded"></div>
                    <div className="w-5/6 h-2 bg-gray-700 rounded"></div>
                    <div className="w-4/6 h-2 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            )}

            {feature.visualType === "publishing" && (
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-500/20 rounded p-2 flex items-center justify-center">
                    <ApperIcon name="Twitter" className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="bg-pink-500/20 rounded p-2 flex items-center justify-center">
                    <ApperIcon name="Instagram" className="w-4 h-4 text-pink-400" />
                  </div>
                  <div className="bg-red-500/20 rounded p-2 flex items-center justify-center">
                    <ApperIcon name="Youtube" className="w-4 h-4 text-red-400" />
                  </div>
                  <div className="bg-purple-500/20 rounded p-2 flex items-center justify-center">
                    <ApperIcon name="Smartphone" className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;