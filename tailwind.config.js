/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "title-1": "1.25rem",
        "title-2": ["1.25rem", {
          "line-height": "100$%"
        }],
        "body-1": "1rem", 
        "body-2": "0.875rem",
        "body-3": "0.75rem",
        "body-4": ["0.75rem", {
          "fontWeight": "700"
        }],
        "body-5": "0.625rem"
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
        titillium: ['var(--font-titillium)'],
      },
      colors: {
        "black-900": "#1a1a1a",
        "black-700": "#222222",
        "green-500": "#149000",
        "gray-100": "#d9d9d9",
      },
    },
  },
  plugins: [],
}
