import React, { useEffect, useState, useMemo } from 'react';

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Detect mobile devices and tab visibility
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Generate wave layers
  const waveCount = 7;
  const waves = useMemo(() => 
    Array.from({ length: waveCount }, (_, i) => ({
      id: i,
      height: Math.random() * 4 + 2, // 2-6px height
      opacity: Math.random() * 0.3 + 0.2, // 0.2-0.5 opacity
      speed: Math.random() * 15 + 10, // 10-25s duration
      delay: Math.random() * -20, // Random start delay
      color: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#00ff88' : '#8b5cf6',
      yPosition: Math.random() * 100, // Random vertical position
    })), []
  );

  // Generate floating arrows
  const arrowCount = isMobile ? 10 : 20;
  const arrows = useMemo(() => 
    Array.from({ length: arrowCount }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 40, // 40-80px
      xPosition: Math.random() * 100,
      duration: Math.random() * 10 + 15, // 15-25s
      delay: Math.random() * -30,
      rotation: Math.random() * 360,
      color: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#00ff88' : '#8b5cf6',
    })), [isMobile]
  );

  // Generate particle system
  const particleCount = isMobile ? 30 : 80;
  const particles = useMemo(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2-6px
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 8 + 8, // 8-16s
      delay: Math.random() * -20,
      direction: Math.random() > 0.5 ? 1 : -1,
    })), [isMobile]
  );

  // Generate gradient orbs
  const orbs = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      size: Math.random() * 500 + 300, // 300-800px
      xPosition: Math.random() * 120 - 10, // -10% to 110%
      yPosition: Math.random() * 120 - 10,
      duration: Math.random() * 30 + 30, // 30-60s
      gradient: i % 2 === 0 ? 'from-accent-blue/20 to-accent-purple/10' : 'from-accent-green/20 to-accent-blue/10',
    })), []
  );

  // Generate data orbs
  const dataOrbCount = isMobile ? 8 : 15;
  const dataOrbs = useMemo(() => 
    Array.from({ length: dataOrbCount }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 20, // 20-60px
      xPosition: Math.random() * 100,
      yPosition: Math.random() * 100,
      pulseDuration: Math.random() * 2 + 2, // 2-4s
      orbitDuration: Math.random() * 20 + 20, // 20-40s
      orbitRadius: Math.random() * 50 + 30,
    })), [isMobile]
  );

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Wave Layers */}
      <div className="absolute inset-0">
        {waves.map((wave) => (
          <div
            key={wave.id}
            className="absolute w-full animate-wave-flow will-change-transform"
            style={{
              height: `${wave.height}px`,
              top: `${wave.yPosition}%`,
              backgroundColor: wave.color,
              opacity: wave.opacity,
              animationDuration: `${wave.speed}s`,
              animationDelay: `${wave.delay}s`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 10px ${wave.color}50`,
            }}
          />
        ))}
      </div>

      {/* Floating Arrows */}
      <div className="absolute inset-0">
        {arrows.map((arrow) => (
          <div
            key={arrow.id}
            className="absolute animate-arrow-float will-change-transform"
            style={{
              left: `${arrow.xPosition}%`,
              width: `${arrow.size}px`,
              height: `${arrow.size}px`,
              animationDuration: `${arrow.duration}s`,
              animationDelay: `${arrow.delay}s`,
              transform: `rotate(${arrow.rotation}deg)`,
            }}
          >
            <div
              className="w-full h-full opacity-30"
              style={{
                background: `linear-gradient(135deg, ${arrow.color}80, ${arrow.color}40)`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                filter: `drop-shadow(0 0 8px ${arrow.color}60)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-particle-move will-change-transform"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.startX}%`,
              top: `${particle.startY}%`,
              background: 'radial-gradient(circle, #00d4ff80, transparent)',
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              boxShadow: `0 0 6px #00d4ff60`,
            }}
          />
        ))}
      </div>

      {/* Large Gradient Orbs */}
      <div className="absolute inset-0">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className={`absolute rounded-full animate-orb-drift will-change-transform bg-gradient-to-br ${orb.gradient} blur-3xl`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.xPosition}%`,
              top: `${orb.yPosition}%`,
              animationDuration: `${orb.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Pulsing Data Orbs */}
      <div className="absolute inset-0">
        {dataOrbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full animate-data-pulse will-change-transform"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.xPosition}%`,
              top: `${orb.yPosition}%`,
              background: 'radial-gradient(circle, #8b5cf660, #00ff8840)',
              animationDuration: `${orb.pulseDuration}s`,
              boxShadow: '0 0 15px #8b5cf650',
              transform: 'translateZ(0)', // Hardware acceleration
            }}
          >
            <div
              className="absolute inset-0 rounded-full animate-orbital-motion opacity-60"
              style={{
                background: 'radial-gradient(circle, #00d4ff40, transparent)',
                animationDuration: `${orb.orbitDuration}s`,
                transform: `translateX(${orb.orbitRadius}px)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;