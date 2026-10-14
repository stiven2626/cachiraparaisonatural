/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta principal: #137F0B · #449F37 · #74BF63 · #A5DF8E · #D5FFBA
        menta: {
          50: "#f6ffef",
          100: "#eaffdc",
          200: "#d5ffba",
          300: "#bdefa4",
          400: "#a5df8e",
          500: "#74bf63",
          600: "#449f37",
          700: "#137f0b",
          800: "#0f6409",
          900: "#0b4a07",
        },
        salvia: {
          50: "#f6f9f4",
          100: "#ebf2e6",
          200: "#dbe8d3",
          300: "#c4d9b8",
          400: "#a9c79a",
          500: "#8db27c",
        },
        // Acentos suaves de apoyo
        niebla: "#f0fae6",
        laguna: "#cfe9e6",
        mora: "#c97a92",
        tinta: "#14300f",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        suave: "0 10px 30px -12px rgba(19, 127, 11, 0.22)",
      },
    },
  },
  plugins: [],
};
