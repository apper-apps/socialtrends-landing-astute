import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import TrendingCard from "@/components/molecules/TrendingCard";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import { trendingService } from "@/services/api/trendingService";

const DemoSection = () => {
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("discover");

  const loadTrendingTopics = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await trendingService.getAll();
      setTrendingTopics(data);
    } catch (err) {
      setError(err.message || "Failed to load trending topics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingTopics();
  }, []);

  const tabs = [
    { id: "discover", label: "Discover", icon: "Search" },
    { id: "create", label: "Create", icon: "Sparkles" },
    { id: "publish", label: "Publish", icon: "Share2" }
  ];

  return (
    <section id="demo" className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
<div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 border border-accent-green/30">
            <ApperIcon name="Play" className="w-4 h-4 text-accent-green" />
            <span className="text-sm text-accent-green font-medium">Live Demo</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            See Social Trends in
            <span className="gradient-text"> Action</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch our AI discover tomorrow's trends, generate viral content, 
            and publish across all your channels - all in real-time.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-lg p-2 border border-white/10">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-blue text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <ApperIcon name={tab.icon} className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Demo Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card variant="floating" className="p-6">
              {activeTab === "discover" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Trending Now</h3>
                    <Badge variant="success">Live</Badge>
                  </div>
                  
                  {loading && (
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse">
                          <div className="h-16 bg-gray-700 rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {error && (
                    <Error message={error} onRetry={loadTrendingTopics} />
                  )}
                  
                  {!loading && !error && (
                    <div className="space-y-3">
                      {trendingTopics.map((trend, index) => (
                        <TrendingCard 
                          key={trend.Id}
                          trend={trend}
                          index={index}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "create" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">AI Content Generator</h3>
                    <Badge variant="primary">Beta</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="glass rounded-lg p-4 border border-accent-purple/30">
                      <div className="flex items-center space-x-2 mb-3">
                        <ApperIcon name="Sparkles" className="w-4 h-4 text-accent-purple" />
                        <span className="text-sm text-accent-purple">AI Suggestion</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        "Riding the #AIArt wave! Just created this mind-blowing piece using the latest AI tools. 
                        The future of creativity is here! 🎨✨ #CreativeAI #DigitalArt"
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Viral Score: 8.7/10</span>
                      <span>Optimal Time: 3:30 PM</span>
                    </div>
                    
                    <Button variant="primary" className="w-full">
                      <ApperIcon name="Wand2" className="w-4 h-4 mr-2" />
                      Generate Content
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "publish" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Multi-Platform Publisher</h3>
                    <Badge variant="outline">5 Platforms</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Twitter", icon: "Twitter", color: "blue" },
                      { name: "Instagram", icon: "Instagram", color: "pink" },
                      { name: "TikTok", icon: "Smartphone", color: "purple" },
                      { name: "YouTube", icon: "Youtube", color: "red" }
                    ].map((platform) => (
                      <div 
                        key={platform.name}
                        className="glass rounded-lg p-4 border border-white/10 hover:border-accent-blue/50 transition-colors duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-${platform.color}-500/20 rounded-lg flex items-center justify-center`}>
                            <ApperIcon name={platform.icon} className={`w-4 h-4 text-${platform.color}-400`} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{platform.name}</div>
                            <div className="text-xs text-green-400">Connected</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="primary" className="w-full">
                    <ApperIcon name="Send" className="w-4 h-4 mr-2" />
                    Publish to All Platforms
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>

          {/* Demo Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {activeTab === "discover" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Real-Time Trend Detection
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our AI constantly monitors social platforms, analyzing millions of posts, 
                  hashtags, and interactions to identify emerging trends before they explode. 
                  Get notified the moment something starts gaining traction.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">24/7 Monitoring</div>
                      <div className="text-gray-400 text-sm">Never miss a trending moment</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Predictive Analytics</div>
                      <div className="text-gray-400 text-sm">Spot trends 2-3 days early</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-purple rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Custom Alerts</div>
                      <div className="text-gray-400 text-sm">Get notified for your niche</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "create" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  AI-Powered Content Creation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Transform trending topics into viral content with our advanced AI. 
                  Generate captions, video scripts, and post ideas that perfectly 
                  match the trending topic and your brand voice.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Viral Score Prediction</div>
                      <div className="text-gray-400 text-sm">Know your content's potential</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Brand Voice Matching</div>
                      <div className="text-gray-400 text-sm">Stay authentic to your style</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-purple rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Optimal Timing</div>
                      <div className="text-gray-400 text-sm">Post when your audience is active</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "publish" && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  One-Click Multi-Platform Publishing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Stop the copy-paste dance between platforms. Publish your content 
                  to all your social channels simultaneously, with automatic formatting 
                  optimization for each platform's requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Auto-Formatting</div>
                      <div className="text-gray-400 text-sm">Perfect format for each platform</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Scheduled Publishing</div>
                      <div className="text-gray-400 text-sm">Post at optimal times</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-purple rounded-full flex items-center justify-center mt-0.5">
                      <ApperIcon name="Check" className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Performance Tracking</div>
                      <div className="text-gray-400 text-sm">Monitor across all platforms</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;