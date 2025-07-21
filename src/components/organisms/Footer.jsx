import React from "react";
import { motion } from "framer-motion";
import Logo from "@/components/molecules/Logo";
import NavigationLink from "@/components/molecules/NavigationLink";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Demo", href: "#demo" },
      { label: "Pricing", href: "#pricing" },
      { label: "API", href: "#" },
      { label: "Integrations", href: "#" }
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" }
    ],
    Resources: [
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Status", href: "#" }
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
      { label: "Security", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" },
    { name: "Discord", icon: "MessageCircle", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-t from-primary-dark to-primary-dark-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
>
              <Logo className="text-2xl" />
              <p className="text-gray-400 leading-relaxed max-w-md">
                Social Trends is your AI-powered compass to discover emerging trends, 
                generate viral-worthy content, and post directly to all your social channels.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-blue transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <ApperIcon name={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Stay ahead of trends</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gradient-blue text-white rounded-lg hover:scale-105 transition-transform duration-300">
                    <ApperIcon name="Send" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Link Sections */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-white font-semibold">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <NavigationLink
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </NavigationLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Social Trends. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <NavigationLink
                to="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </NavigationLink>
              <NavigationLink
                to="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </NavigationLink>
              <NavigationLink
                to="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Settings
              </NavigationLink>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;