/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 4px 6px var(--tw-shadow-color, rgba(0, 0, 0, 0.1))',
      },
    },
  },
  plugins: [],
};
