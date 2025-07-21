import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card variant="glass" hover={true} className="p-6">
        <div className="space-y-4">
          {/* Quote */}
          <div className="relative">
            <ApperIcon 
              name="Quote" 
              className="w-6 h-6 text-accent-blue opacity-50 absolute -top-2 -left-2" 
            />
            <p className="text-gray-300 italic leading-relaxed pl-4">
              "{testimonial.quote}"
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-700">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-accent-blue/30"
            />
            <div>
              <div className="font-semibold text-white">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-400">
                {testimonial.role} • {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;