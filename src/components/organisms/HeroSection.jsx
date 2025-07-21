import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wave-pattern">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark-secondary to-primary-dark opacity-90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent-green rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent-purple rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent-blue rounded-full animate-pulse delay-1000"></div>
      </div>

<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px] space-y-6"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-bold leading-[1.2] mb-6"
            >
              <span className="text-white">Ride the Next Wave. Before it Breaks.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 leading-[1.5] max-w-[600px] mx-auto mb-10"
            >
              SocialTrends.app is your AI-powered compass to discover emerging trends, 
              generate viral-worthy content, and post directly to all your social channels. 
              Stop guessing, start trending.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl text-lg font-medium text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 min-w-[200px] min-h-[44px]"
              >
                Start Trending for Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#00d4ff', color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-accent-blue rounded-xl text-lg font-medium text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300 min-w-[200px] min-h-[44px]"
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400"
        >
          <span className="text-sm">Discover More</span>
          <ApperIcon name="ChevronDown" className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;