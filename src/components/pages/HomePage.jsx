import React from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import DemoSection from "@/components/organisms/DemoSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import Footer from "@/components/organisms/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;