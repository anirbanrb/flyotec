/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E11",
        panel: "#111418",
        surface: "#161A20",
        borderSoft: "#242A33",
        accent: "#6CA0DC",
        route: "#FF6B4A",
        muted: "#9CA3AF",
      },
      borderRadius: {
        xl: "14px",
        xxl: "18px",
      },
      boxShadow: {
        panel: "0 10px 30px rgba(0,0,0,.55)",
      },
    },
  },
  plugins: [],
};
