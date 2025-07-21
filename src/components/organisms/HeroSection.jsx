import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import FloatingMockup from "@/components/molecules/FloatingMockup";
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 border border-accent-blue/30"
            >
              <ApperIcon name="Sparkles" className="w-4 h-4 text-accent-blue" />
              <span className="text-sm text-accent-blue font-medium">AI-Powered Trend Discovery</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Ride the</span>{" "}
              <span className="gradient-text wave-animation">Next Wave</span>
              <span className="text-white">.</span>
              <br />
              <span className="text-white">Before it</span>{" "}
              <span className="text-accent-blue">Breaks</span>
              <span className="text-white">.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              SocialTrends.app is your AI-powered compass to discover emerging trends, 
              generate viral-worthy content, and post directly to all your social channels. 
              <span className="text-accent-blue font-medium"> Stop guessing, start trending.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" className="group">
                <ApperIcon name="Zap" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Trending for Free
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <ApperIcon name="Play" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                See How It Works
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold gradient-text">10k+</div>
                <div className="text-sm text-gray-400">Trends Discovered Daily</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-400">Viral Posts Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-400">Platforms Supported</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Main Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-0 left-0 z-10"
              >
                <FloatingMockup type="dashboard" />
              </motion.div>

              {/* Social Post */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-32 right-0 z-20"
              >
                <FloatingMockup type="social" />
              </motion.div>

              {/* Analytics */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="absolute bottom-0 left-8 z-30"
              >
                <FloatingMockup type="analytics" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-20 right-20 w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center"
              >
                <ApperIcon name="TrendingUp" className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-32 right-16 w-10 h-10 bg-accent-green rounded-full flex items-center justify-center"
              >
                <ApperIcon name="Heart" className="w-5 h-5 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-60 left-20 w-8 h-8 bg-accent-purple rounded-full flex items-center justify-center"
              >
                <ApperIcon name="Sparkles" className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
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