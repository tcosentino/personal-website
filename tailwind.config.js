/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-Brutalist Playful palette
        primary: '#FF6B6B',      // Coral red
        secondary: '#4ECDC4',    // Turquoise
        accent: '#FFE66D',       // Yellow
        dark: '#2D3748',         // Dark gray text
        cream: '#FFFEF2',        // Warm off-white background
        black: '#000000',
      },
      fontFamily: {
        display: ['Clash Display', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        sans: ['General Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'monospace'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-xl': '12px 12px 0px 0px #000000',
        'brutal-primary': '4px 4px 0px 0px #FF6B6B',
        'brutal-secondary': '4px 4px 0px 0px #4ECDC4',
        'brutal-accent': '4px 4px 0px 0px #FFE66D',
      },
    },
  },
  plugins: [],
}
