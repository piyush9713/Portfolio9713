/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        // Custom shadows, if you want to organize them here
        customDark: "-4px 4px 4px rgb(87, 87, 87)",
        customLight: "0px 8px 42px rgb(255, 255, 255)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        RobotoSlab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // First custom text shadow
        ".text-shadow-dark": {
          textShadow: "-4px 4px 4px rgb(87, 87, 87)",
        },
        // Second custom text shadow
        ".text-shadow-light": {
          textShadow: "0px 8px 42px rgb(255, 255, 255)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
