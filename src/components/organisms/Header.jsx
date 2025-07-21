import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/molecules/Logo";
import NavigationLink from "@/components/molecules/NavigationLink";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationLink to="#features">Features</NavigationLink>
            <NavigationLink to="#demo">Demo</NavigationLink>
            <NavigationLink to="#testimonials">Reviews</NavigationLink>
            <NavigationLink to="#pricing">Pricing</NavigationLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationLink to="#" className="text-sm">
              Log in
            </NavigationLink>
            <Button variant="primary" size="sm">
              Start Trending for Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <ApperIcon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              className="w-6 h-6 text-white" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-6 glass rounded-lg border border-white/10"
          >
            <nav className="flex flex-col space-y-4 p-6">
              <NavigationLink 
                to="#features" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </NavigationLink>
              <NavigationLink 
                to="#demo" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </NavigationLink>
              <NavigationLink 
                to="#testimonials" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </NavigationLink>
              <NavigationLink 
                to="#pricing" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </NavigationLink>
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <NavigationLink to="#" className="block">
                  Log in
                </NavigationLink>
                <Button variant="primary" className="w-full">
                  Start Trending for Free
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;