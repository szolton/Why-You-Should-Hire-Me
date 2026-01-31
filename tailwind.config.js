/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // must include your JSX files
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite", // custom slow spin
      },
    },
  },
  plugins: [],
};
