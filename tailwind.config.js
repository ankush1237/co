/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        red: '0 0 8px #ff4444, 0 0 16px #ff4444, 0 0 32px #ff4444',
        white: '0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 32px #ffffff',
      },
      textShadow: {
        red: '0 0 8px #ff4444, 0 0 16px #ff4444, 0 0 32px #ff4444',
        white: '0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 32px #ffffff',
      },
    },
  },
  plugins: [],
};
