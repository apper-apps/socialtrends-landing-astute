/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0a0a',
          'dark-secondary': '#1a1a1a',
          blue: '#00d4ff',
          green: '#00ff88',
          purple: '#8b5cf6',
        },
        accent: {
          blue: '#00d4ff',
          green: '#00ff88',
          purple: '#8b5cf6',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0a0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'gradient-blue': 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
        'gradient-green': 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
        'wave-pattern': 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%2300d4ff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E")',
      },
      backdropBlur: {
        xs: '2px',
      },
animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'wave-flow': 'waveFlow linear infinite',
        'arrow-float': 'arrowFloat linear infinite',
        'particle-move': 'particleMove linear infinite',
        'orb-drift': 'orbDrift ease-in-out infinite',
        'data-pulse': 'dataPulse ease-in-out infinite',
        'orbital-motion': 'orbitalMotion linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        waveFlow: {
          '0%': { transform: 'translateX(-100%) scaleY(0.8)' },
          '50%': { transform: 'translateX(50vw) scaleY(1.2)' },
          '100%': { transform: 'translateX(200%) scaleY(0.8)' },
        },
        arrowFloat: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-100px) rotate(15deg)', opacity: '0' },
        },
        particleMove: {
          '0%': { transform: 'translate(0, 0) scale(0)', opacity: '0' },
          '10%': { opacity: '0.8', transform: 'scale(1)' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translate(100vw, -100vh) scale(0)', opacity: '0' },
        },
        orbDrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(-10px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(-20px, -10px) scale(1.05)' },
        },
        dataPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.3)', opacity: '1' },
        },
        orbitalMotion: {
          '0%': { transform: 'rotate(0deg) translateX(30px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(30px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}