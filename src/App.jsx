import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "@/components/pages/HomePage";
import AnimatedBackground from "@/components/organisms/AnimatedBackground";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary-dark-secondary">
      <AnimatedBackground />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="z-[9999]"
      />
    </div>
  );
}

export default App;