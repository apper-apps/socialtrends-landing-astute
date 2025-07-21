import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { featuresService } from "@/services/api/featuresService";
import FeatureCard from "@/components/molecules/FeatureCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const FeaturesSection = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadFeatures = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await featuresService.getAll();
      setFeatures(data);
    } catch (err) {
      setError(err.message || "Failed to load features");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeatures();
  }, []);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-primary-dark to-primary-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 border border-accent-purple/30">
            <span className="text-sm text-accent-purple font-medium">Core Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Your AI-Powered
            <span className="gradient-text"> Trend Arsenal</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From discovery to viral success - everything you need to stay ahead 
            of the curve and dominate social media trends.
          </p>
        </motion.div>

        {/* Features Content */}
        {loading && <Loading type="features" />}
        
        {error && (
          <Error 
            message={error}
            onRetry={loadFeatures}
          />
        )}
        
        {!loading && !error && features.length === 0 && (
          <Empty 
            title="No Features Available"
            description="We're updating our feature showcase. Check back soon!"
            actionText="Refresh Features"
            onAction={loadFeatures}
          />
        )}
        
        {!loading && !error && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.Id}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {!loading && !error && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 border border-accent-blue/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Ride the Next Wave?
              </h3>
              <p className="text-gray-300 mb-6">
                Join thousands of creators who are already trending with SocialTrends.
              </p>
              <button className="bg-gradient-blue text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 glow-blue">
                Start Your Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;