/** @type {import('tailwindcss').Config} */

import * as tailwindAnimate from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#121212',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4CF57',
          dark: '#B48F17',
          muted: 'rgba(212, 175, 55, 0.1)'
        },
        card: {
          DEFAULT: "#121212",
          foreground: "#ffffff",
        },
        border: "#333333",
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #D4AF3720 0deg, transparent 180deg)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [tailwindAnimate],
}
