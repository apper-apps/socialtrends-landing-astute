import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { testimonialsService } from "@/services/api/testimonialsService";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await testimonialsService.getAll();
      setTestimonials(data);
    } catch (err) {
      setError(err.message || "Failed to load testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary-dark-secondary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 border border-accent-green/30">
            <ApperIcon name="Heart" className="w-4 h-4 text-accent-green" />
            <span className="text-sm text-accent-green font-medium">Loved by Creators</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Trusted by creators,
            <span className="gradient-text"> marketers</span>, and
            <span className="gradient-text"> founders</span> worldwide
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands who are already riding the wave to viral success 
            with SocialTrends. Here's what they're saying about us.
          </p>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10,000+</div>
            <div className="text-gray-400">Trends Discovered Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-400">Viral Posts Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-400">Trend Monitoring</div>
          </div>
        </motion.div>

        {/* Testimonials Content */}
        {loading && <Loading type="testimonials" />}
        
        {error && (
          <Error 
            message={error}
            onRetry={loadTestimonials}
          />
        )}
        
        {!loading && !error && testimonials.length === 0 && (
          <Empty 
            title="No Reviews Yet"
            description="Be among the first to share your experience with SocialTrends!"
            actionText="Start Trending"
            onAction={() => console.log("Start trending clicked")}
          />
        )}
        
        {!loading && !error && testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.Id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Brand Logos */}
        {!loading && !error && testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-8">Trusted by leading brands and creators</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              {[
                "TechFlow", "CreativeStudio", "ViralCorp", "TrendMakers", 
                "SocialGenius", "ContentKings"
              ].map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.4, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg px-6 py-3 border border-gray-700 hover:border-accent-blue/30 transition-colors duration-300"
                >
                  <span className="text-white font-medium">{brand}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;