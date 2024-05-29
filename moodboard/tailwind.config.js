/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        'secondary-1': '#7f1d1d',
        'secondary-2': '#f8f7ff',
        'secondary-3': '',
        'background-1': '',
        'background-2': '',
        'background-3': '',
        'background-4': '',
      },
    },
  },
  plugins: [],
};
